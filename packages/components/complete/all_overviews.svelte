<script lang="ts">
	import LineSpacer from '../elements/line.svelte';
	import ConditionalHref from '../layout/conditional_href.svelte';
	import PackageTemplate from '../templates/element/package_template.svelte';

	export let clickable = true;
	export let ebay_version: boolean;

	const space = '100px';
</script>

<div class="outer">
	<h1>Programmpakete bei Sky</h1>

	<ConditionalHref href="/angebote/entertainmentplus" active={clickable}>
		<PackageTemplate
			show_senders={ebay_version ? 'entertainmentplus' : undefined}
			show_price={!ebay_version}
			price_asset_ids={['entertainmentplus']}
		/>
	</ConditionalHref>
	<!-- <a href="/angebote/legacy/entertainment">
		<EntertainmentOverview />
	</a> -->
	<LineSpacer {space} />
	<ConditionalHref href="/angebote/cinema" active={clickable}>
		<PackageTemplate
			show_senders={ebay_version ? 'cinema' : undefined}
			show_price={!ebay_version}
			price_asset_ids={['cinema']}
		/>
	</ConditionalHref>
	<LineSpacer {space} />
	<ConditionalHref href="/angebote/sport" active={clickable}>
		<PackageTemplate
			show_senders={ebay_version ? 'sport' : undefined}
			show_price={!ebay_version}
			price_asset_ids={['sport']}
		/>
	</ConditionalHref>
	<LineSpacer {space} />
	<ConditionalHref href="/angebote/bundesliga" active={clickable}>
		<PackageTemplate
			show_senders={ebay_version ? 'bundesliga' : undefined}
			show_price={!ebay_version}
			price_asset_ids={['bundesliga']}
		/>
	</ConditionalHref>

	{#if !ebay_version}
		<LineSpacer {space} />
		<PackageTemplate show_price={!ebay_version} price_asset_ids={['dazn']} />
	{/if}
</div>

<style lang="scss">
	h1 {
		text-align: center;
		margin: 70px;
		font-size: 1.875rem;
		font-weight: bold;
	}
	.outer {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--block-width);
		margin: 0 auto;
		width: 100%;
	}
</style>
