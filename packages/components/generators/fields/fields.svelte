<script lang="ts">
	import type { Fields, FieldsType } from '.';

	export let fields: T;
	export let current: OutType | undefined = undefined;
	export let last_completed: OutType | undefined = undefined;

	type T = $$Generic<Fields>;

	// This component generates a form with the output type T
	// example: <Query> fields={[
	//         {name: 'name', type: 'text'},
	//         {name: 'age', type: 'number'},
	//         {options: ['male', 'female'], 'type': 'select'}
	// ]} got={got} />

	type OutType = FieldsType<T>;
</script>
