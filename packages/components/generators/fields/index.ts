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

type AltType<T extends Alt> = {
	[I in keyof T['options']]: T['options'][I] extends AltOption
		? TFieldsType<T['options'][I]['fields']>[number]
		: never;
}[number];

type ToObj<K extends string, V> = {
	[key in K]: V;
};

type TFieldType<T extends Field> = Simplify<
	T extends { type: 'text'; name: string }
		? ToObj<T['name'], string>
		: T extends { type: 'number'; name: string }
		  ? ToObj<T['name'], number>
		  : T extends Option
		    ? OptionType<T>
		    : T extends Alt
		      ? AltType<T>
		      : T extends { type: 'subfield'; name: string; fields: Fields }
		        ? ToObj<T['name'], FieldsType<T['fields']>> // Removing this line removes the error, but I don't want to remove subfields
		        : never
>;

type OptionType<T extends Option> = {
	[I in keyof T['options']]: T['options'][I] extends string
		? ToObj<T['name'], T['options'][I]>
		: never;
}[number];

type TFieldsType<T extends Fields> = {
	[I in keyof T]: TFieldType<T[I]>;
};

type MergeTuple<T extends ReadonlyArray<any>> = T extends readonly [
	infer Head,
	infer Next,
	...infer Rest
]
	? MergeTuple<[Head & Next, ...Rest]>
	: T extends readonly [infer Last]
	  ? Last
	  : Record<string, never>;

// @ts-expect-error - This type is too deep for ts
export type FieldsType<T extends Fields> = MergeTuple<TFieldsType<T>>;

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
		type: 'number',
		name: 'something'
	}
] as const;

type FieldsTypeResult = FieldsType<typeof fields>; // <-- The output is correct, but the error is still there
