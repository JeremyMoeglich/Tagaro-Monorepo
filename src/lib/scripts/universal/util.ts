export function sum(values: Array<number>): number {
	let total = 0;
	values.forEach((v) => (total += v));
	return total;
}

export function map_object<IK extends string,IV,K extends string,V>(object: Record<IK, IV>, callbackfn: (key: IK, value: IV) => {key: K, value: V}): Record<K,V> {
    return Object.fromEntries(Object.entries(object).map((([key, value]) => {
        const returned = callbackfn(key as IK, value as IV)
        return [returned.key, returned.value]
    }))) as Record<K,V>
}


