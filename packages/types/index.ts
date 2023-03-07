// Convert type to JSON parse output
// Example:
// { data: Date } -> { data: string }
// { data: (a: number) => number } -> {}
// { data: { a: number } } -> { data: { a: number } }

export type JsonEq<T> = T extends undefined
	? undefined
	: T extends null
	? null
	: T extends boolean
	? boolean
	: T extends number
	? number
	: T extends string
	? string
	: T extends Date
	? string
	: T extends Array<infer U>
	? Array<JsonEq<U>>
	: T extends Function
	? null
	: T extends object
	? { [P in keyof T]: JsonEq<T[P]> }
	: never;
