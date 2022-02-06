export type RequiredKeys<T> = {
	[K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? never : K;
}[keyof T];
export type OptionalKeys<T> = {
	[K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? K : never;
}[keyof T];

interface Something {
	firstName: string;
	lastName: string;
	phone?: string;
	age: number;
}

console.log(Array<OptionalKeys<Something>>());
