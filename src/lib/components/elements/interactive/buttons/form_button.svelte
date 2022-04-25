<script lang="ts">
	import { load_form } from '$lib/scripts/frontend/load_aboformular';
	import { aboformular } from '$lib/scripts/frontend/urls';

	export let source: string;
	export let route: string = aboformular;
</script>

<button class="form_button" on:click={async () => load_form(source, route)}><slot /></button>
