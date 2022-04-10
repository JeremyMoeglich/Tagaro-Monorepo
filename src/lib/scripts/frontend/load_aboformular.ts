import { goto } from '$app/navigation';
import { aboformular } from '$lib/scripts/frontend/urls';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			reject(new Error('TIMEOUT'));
		}, ms);

		promise
			.then((value) => {
				clearTimeout(timer);
				resolve(value);
			})
			.catch((reason) => {
				clearTimeout(timer);
				reject(reason);
			});
	});
}

const firebaseConfig = {
	apiKey: 'AIzaSyBxa3QjcGlcfzictoQpiT7iuIxf99ViVpM',
	authDomain: 'tagaro-346715.firebaseapp.com',
	projectId: 'tagaro-346715',
	storageBucket: 'tagaro-346715.appspot.com',
	messagingSenderId: '162148161041',
	appId: '1:162148161041:web:e4acb74e3b23b03b4c43b0',
	measurementId: 'G-SBNZSQV2MZ'
} as const;

export async function load_form(source: string): Promise<void> {
	try {
		const ip: unknown = await (await timeout(fetch('https://ip.moeglich.dev/'), 2000))
			.json()
			.then((v) => v.ip);

		if (typeof ip === 'string') {
			const firebase_app = initializeApp(firebaseConfig);
			const firestore = getFirestore(firebase_app);

			const log_collection = collection(firestore, 'Ip_log');
			await addDoc(log_collection, {
				ip: ip,
				createdAt: Timestamp.fromDate(new Date()),
				source: source
			});
		} else {
			console.log('Failed to get IP');
		}
	} catch (e) {
		console.log(e);
	}
	console.log(`Redirecting to ${aboformular}`);
	await goto(aboformular);
}
