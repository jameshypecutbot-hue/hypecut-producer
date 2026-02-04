// Firestore Database Operations
import { db, auth, storage } from './firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  credits: number;
  plan: 'free' | 'starter' | 'pro' | 'agency';
  createdAt: Date;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description: string;
  type: 'videos' | 'photos' | 'animations';
  style: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Video {
  id: string;
  projectId: string;
  userId: string;
  title: string;
  status: 'pending' | 'generating' | 'completed' | 'failed';
  prompt: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  cost: number;
  duration: number;
  metadata: {
    aiModel: string;
    resolution: string;
    aspectRatio: string;
  };
  createdAt: Date;
  completedAt?: Date;
}

export interface APIKey {
  id: string;
  userId: string;
  provider: 'google_veo' | 'runway' | 'pika' | 'stable_video';
  keyEncrypted: string;
  isActive: boolean;
  createdAt: Date;
}

// User Operations
export const createUser = async (userData: Omit<User, 'id' | 'createdAt'>) => {
  const docRef = await addDoc(collection(db, 'users'), {
    ...userData,
    credits: 100, // Free starter credits
    plan: 'free',
    createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const getUser = async (userId: string) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as User : null;
};

export const updateUserCredits = async (userId: string, credits: number) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { credits });
};

// Project Operations
export const createProject = async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
  const docRef = await addDoc(collection(db, 'projects'), {
    ...projectData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
};

export const getUserProjects = async (userId: string) => {
  const q = query(
    collection(db, 'projects'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Project);
};

export const updateProject = async (projectId: string, data: Partial<Project>) => {
  const docRef = doc(db, 'projects', projectId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp()
  });
};

export const deleteProject = async (projectId: string) => {
  await deleteDoc(doc(db, 'projects', projectId));
};

// Video Operations
export const createVideo = async (videoData: Omit<Video, 'id' | 'createdAt'>) => {
  const docRef = await addDoc(collection(db, 'videos'), {
    ...videoData,
    status: 'pending',
    createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const getProjectVideos = async (projectId: string) => {
  const q = query(
    collection(db, 'videos'),
    where('projectId', '==', projectId),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Video);
};

export const getUserVideos = async (userId: string) => {
  const q = query(
    collection(db, 'videos'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Video);
};

export const updateVideoStatus = async (videoId: string, status: Video['status'], videoUrl?: string) => {
  const docRef = doc(db, 'videos', videoId);
  const updateData: any = { status };
  if (videoUrl) updateData.videoUrl = videoUrl;
  if (status === 'completed') updateData.completedAt = serverTimestamp();
  await updateDoc(docRef, updateData);
};

// API Keys Operations
export const saveAPIKey = async (apiKeyData: Omit<APIKey, 'id' | 'createdAt'>) => {
  // Check if key already exists for this provider
  const q = query(
    collection(db, 'api_keys'),
    where('userId', '==', apiKeyData.userId),
    where('provider', '==', apiKeyData.provider)
  );
  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    // Update existing
    const docRef = doc(db, 'api_keys', querySnapshot.docs[0].id);
    await updateDoc(docRef, {
      keyEncrypted: apiKeyData.keyEncrypted,
      isActive: apiKeyData.isActive,
      createdAt: serverTimestamp()
    });
    return querySnapshot.docs[0].id;
  } else {
    // Create new
    const docRef = await addDoc(collection(db, 'api_keys'), {
      ...apiKeyData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  }
};

export const getUserAPIKeys = async (userId: string) => {
  const q = query(
    collection(db, 'api_keys'),
    where('userId', '==', userId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as APIKey);
};

// File Storage
export const uploadVideo = async (userId: string, videoId: string, file: File) => {
  const storageRef = ref(storage, `videos/${userId}/${videoId}/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const uploadThumbnail = async (userId: string, videoId: string, file: File) => {
  const storageRef = ref(storage, `thumbnails/${userId}/${videoId}/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};