<script lang="ts">
	import { load_form } from 'frontend/load_aboformular';
	import { aboformular } from 'open_constants';

	export let source: string;
	export let route: string = aboformular;
</script>

<button class="form_button" on:click={async () => load_form(source, route)}><slot /></button>
