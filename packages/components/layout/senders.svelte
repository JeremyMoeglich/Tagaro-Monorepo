<script lang="ts">
	import { dev } from '$app/environment';
	import { make_url } from 'frontend/url';

	export let title: string;

	interface Sender {
		image: string;
		text: string;
	}

	export let content: ReadonlyArray<Sender>;
	export let tiny_title: boolean = false;
</script>

<div class="outer">
	<h2
		style:font-size={tiny_title ? '25px' : '35px'}
		style:margin-bottom={tiny_title ? '30px' : '15px'}
	>
		{title}
	</h2>
	<div class="main_alignment">
		{#each content as element}
			<div class="sender_box">
				<img src={make_url(element.image, dev)} alt="" />
				<p>{element.text}</p>
			</div>
		{/each}
	</div>
	<p class="subtitle">
		Bei Kabelempfang hängt die Verfügbarkeit und Anzahl der enthaltenen Sender vom jeweiligen
		Netzbetreiber ab.
	</p>
</div>

<style lang="scss">
	.main_alignment {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		justify-content: center;
		width: 100%;
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
		gap: 25px;
		justify-items: center;
	}
	.sender_box {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 250px;
		width: 7%;
		min-width: 150px;
		font-size: small;
	}
	.outer {
		width: 100%;
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
	.subtitle {
		margin-top: 30px;
	}
	p {
		text-align: center;
	}
</style>
