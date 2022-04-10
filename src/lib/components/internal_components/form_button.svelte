<script lang="ts">
	import { load_form } from '$lib/scripts/frontend/load_aboformular';
	export let source: string;
</script>

<button class="form_button" on:click={async () => load_form(source)}><slot /></button>