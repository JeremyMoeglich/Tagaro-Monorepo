<script lang="ts">
	import FieldsComp from 'components/generators/fields/fields.svelte';
	import type { Fields, FieldsType } from 'components/generators/fields';
	const fields = [
		{
			name: 'name',
			type: 'text'
		},
		{
			name: 'age',
			type: 'number'
		},
		{
			options: ['male', 'female'],
			type: 'select',
			name: 'gender'
		}
	] as const;

	let current: FieldsType<typeof fields>;
</script>
