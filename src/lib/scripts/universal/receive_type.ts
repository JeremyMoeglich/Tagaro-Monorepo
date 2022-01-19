enum receive_type_enum {
	kabel,
	satelit,
	internet
}


export type receive_type = keyof typeof receive_type_enum;

export const receive_types: Array<receive_type> = ['kabel','satelit','internet']