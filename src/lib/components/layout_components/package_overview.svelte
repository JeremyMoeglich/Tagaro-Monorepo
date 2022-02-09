<script lang="ts">
	export let title: string;
	export let points: Array<string>;
	export let image: string = undefined;
	export let detailed: boolean;
</script>

<div class="package_overview">
	<div class="alignment">
		<div class="description">
			<h2 class="title">{title}</h2>
			<ul class="points">
				{#each points as point}
					{#if point[0] === '#'}
						{#if detailed}
							<li>{point.slice(1)}</li>
						{/if}
					{:else}
						<li>{point}</li>
					{/if}
				{/each}
			</ul>
			{#if detailed}
				<slot />
				<img src="/images/external/125amazon.webp" class="image" alt="" />
			{/if}
		</div>

		{#if image}
			<img src={image} alt="" class="image" />
		{/if}
	</div>
</div>

<style lang="scss">
	@import 'lib/style/mixins.scss';
	.alignment {
		display: flex;
		min-width: 70vw;
		margin-right: 10vw;
		margin-left: 10vw;
		gap: calc(5vw + 50px);
		justify-content: center;
		flex-wrap: wrap;
	}
	.badge {
		width: 200px;
		margin-top: 20px;
	}
	.title,
	.description :global(h3) {
		@include gradient-text;
	}
	.points {
		list-style-image: url('/images/icons/plus_char.svg');
		font-size: 16px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		line-height: 150%;
	}
	:global(h3) {
		margin-top: 40px;
	}

	.image {
		width: max(min(30vw, 340px), 200px);
		align-self: center;
	}

	.description {
		min-width: max(340px, 25vw);
		max-width: 700px;
		flex: 1 1 0;
	}
	.package_overview {
		transition-duration: 300ms;
	}
</style>
