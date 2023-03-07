<script lang="ts">
	export let fields: T;
	export let got: (result: FieldsType<T>) => void;

	type T = $$Generic<Fields>;

	// This component generates a form with the output type T
	// example: <Query> fields={[
	//         {name: 'name', type: 'text'},
	//         {name: 'age', type: 'number'},
	//         {options: ['male', 'female'], 'type': 'select'}
	// ]} got={got} />

	type Fields = Array<
		(
			| {
					type: 'text';
			  }
			| {
					type: 'number';
			  }
			| {
					type: 'select';
					options: Array<string>;
			  }
		) & {
			name: string;
		}
	>;

	type FieldsType<T> = {
		[K in keyof T]: T[K] extends { type: 'text' }
			? string
			: T[K] extends { type: 'number' }
			? number
			: T[K] extends { type: 'select' }
			? string
			: never;
	};
</script>
