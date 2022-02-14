export function sum(values: ReadonlyArray<number>): number {
	let total = 0;
	values.forEach((v) => (total += v));
	return total;
}

export function map_object<IK extends string, IV, K extends string, V>(
	object: Record<IK, IV>,
	callbackfn: (key: IK, value: IV) => { key: K; value: V }
): Record<K, V> {
	return Object.fromEntries(
		Object.entries(object).map(([key, value]) => {
			const returned = callbackfn(key as IK, value as IV);
			return [returned.key, returned.value];
		})
	) as Record<K, V>;
}

export function is_empty_string<T>(argument: Omit<T, ''> | ''): argument is Omit<T, ''> {
	return argument !== '';
}

export function final_join(
	lst: ReadonlyArray<string>,
	default_seperator: string,
	final_seperator: string
): string {
	if (lst.length == 1) {
		return lst[0];
	} else if (lst.length == 0) {
		return '';
	} else {
		return (
			lst.slice(0, -2).join(default_seperator) +
			default_seperator +
			lst.slice(-2).join(final_seperator)
		);
	}
}

export function hasProperty<X extends unknown, Y extends PropertyKey>(
	obj: X,
	prop: Y
): obj is X & Record<Y, unknown> {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}
