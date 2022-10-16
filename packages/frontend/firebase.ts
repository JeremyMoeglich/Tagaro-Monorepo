import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBxa3QjcGlcfzictoQpiT7iuIxf99ViVpM',
	authDomain: 'tagaro-346715.firebaseapp.com',
	projectId: 'tagaro-346715',
	storageBucket: 'tagaro-346715.appspot.com',
	messagingSenderId: '162148161041',
	appId: '1:162148161041:web:e4acb74e3b23b03b4c43b0',
	measurementId: 'G-SBNZSQV2MZ'
} as const;

export const firebase_app = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase_app);
export const auth = getAuth(firebase_app);
