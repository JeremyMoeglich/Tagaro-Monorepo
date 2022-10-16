<script lang="ts">
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';

	export let text: string;
	export let content: ReadonlyArray<string>;
	export let tiny_title: boolean = false;
</script>

<div>
	<h2
		class="gradient_text"
		style:font-size={tiny_title ? '25px' : '35px'}
		style:margin-bottom={tiny_title ? '30px' : '15px'}
	>
		{text}
	</h2>
	<div class="main_alignment">
		{#each content as element}
			<div class="sender_box">
				<img src={make_url(element, dev)} alt="" />
			</div>
		{/each}
	</div>
	<p>
		Bei Kabelempfang hängt die Verfügbarkeit und Anzahl der enthaltenen Sender vom jeweiligen
		Netzbetreiber ab.
	</p>
</div>

<style lang="scss">
	.main_alignment {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
		gap: 25px;
	}
	.sender_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 250px;
		width: 7%;
		min-width: 125px;
	}
	h2 {
		text-align: center;
	}
	img {
		width: 100px;
		max-height: 60px;
		object-fit: contain;
		text-align: center;
		gap: 20px;
	}
	p {
		text-align: center;
		margin-top: 30px;
	}
</style>
