import { Simplify } from 'type-fest';

type Alt = {
	type: 'alt';
	options: ReadonlyArray<AltOption>;
};

type AltOption = {
	option_name: string;
	fields: Fields;
};

type Select = {
	type: 'select';
	options: ReadonlyArray<string>;
	name: string;
};

type Option = {
	type: 'option';
	options: ReadonlyArray<string>;
	name: string;
};

type Field =
	| {
			type: 'text';
			name: string;
	  }
	| {
			type: 'number';
			name: string;
	  }
	| Select
	| {
			type: 'subfield';
			fields: Fields;
			name: string;
	  }
	| Option
	| Alt;

export type Fields = ReadonlyArray<Field>;

// example: [
//          {name: 'name', type: 'text'},
//          {name: 'age', type: 'number'},
//          {options: ['male', 'female'], 'type': 'select', name: gender},
// 			{type: 'alt', options: [{option_name: "Some Name1", fields: [
//
//
// ] as const;
// maps to:
// {
//     name: string;
//     age: number;
//	   gender: 'male' | 'female';
// }

type todo = never;

type AltType<T extends Alt> = {
	[I in keyof T['options']]: T['options'][I] extends AltOption
		? TFieldsType<T['options'][I]['fields']>
		: never;
}[number];

type TFieldType<T extends Field> = T extends { type: 'text'; name: string }
	? { key: T['name']; value: string }
	: T extends { type: 'number'; name: string }
	? [[{ key: T['name']; value: number }]]
	: T extends Option
	? OptionType<T>
	: T extends Alt
	? AltType<T>
	: T extends { type: 'subfield'; name: string; fields: Fields }
	? [[{ key: T['name']; value: TFieldsType<T['fields']> }]]
	: never;

type OptionType<T extends Option> = {
	[I in keyof T['options']]: T['options'][I] extends string
		? [[{ key: T['name']; value: T['options'][I] }]]
		: never;
}[number];

type TFieldsType<T extends Fields> = {
	[I in keyof T]: TFieldType<T[I]>;
};

const fields = [
	{
		type: 'alt',
		options: [
			{ option_name: 'Some Name', fields: [{ type: 'text', name: 'foo' }] },
			{ option_name: 'Some other Name', fields: [{ type: 'text', name: 'bar' }] }
		]
	},
	{
		type: 'subfield',
		fields: [{ type: 'text', name: 'test' }],
		name: 'some_subfield'
	},
	{
		type: 'text',
		name: 'foo'
	}
] as const;

type UnionToIntersection<T> = (T extends any ? (x: T) => void : never) extends (x: infer R) => void
	? R
	: never;

type IsUnion<T> = T extends any[] ? T[number] : never;

type IntersectionFromObject<T> = T extends object ? { [K in keyof T]: T[K] } : never;

type ToIntersectionOrObject<T> = T extends any[]
	? IntersectionFromObject<T[number]>
	: IntersectionFromObject<T>;

type MergeTuple<T extends any[]> = ToIntersectionOrObject<T[number]> &
	UnionToIntersection<Extract<T, IsUnion<T>>>;

// Example usage:
type MyTuple = [{ a: number }, { b: string }, { c: number; d: number } | { c: string }];
type MyMergedObject = MergeTuple<MyTuple>; // { a: number; } & { b: string; } & ({ c: number; d: number; } | { c: string; })
