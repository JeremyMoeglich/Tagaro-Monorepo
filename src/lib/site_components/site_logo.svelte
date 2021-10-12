<script>
	import { each } from 'svelte/internal';

	const rotate_time = 500;
	const delay = 4000;

	let current_width = 1;

	let transition_function = 'cubic-bezier(.58,0,1,1)';

	const images = ['/images/logo/star.svg', '/images/logo/sport.svg', '/images/logo/cinema.svg'];

	let current_image = 2;

	setInterval(function () {
		transition_function = 'cubic-bezier(.58,0,1,1)';
		current_width = 0;
		setTimeout(function () {
			current_image = (current_image + 1) % images.length;
			transition_function = 'cubic-bezier(0,0,.58,1)';
			current_width = 1;
		}, rotate_time);
	}, delay);
</script>

<div class="main_container">
	<div class="circle">
		<div
			style={`transform: scale(${current_width}, 1) rotate(0.02deg); transition: all ${transition_function} ${rotate_time}ms;`}
			class="scalar"
		>
			{#each images as image}
				<img
					src={image}
					alt=""
					class={`icon ${images[current_image] === image ? 'visible' : 'invisible'}`}
				/>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use "sass:math";
	@import url('/src/lib/style/mixins.scss');

	$logo_size: 128px;

	.main_container {
		display: flex;
		justify-content: center;
		width: $logo_size;
		height: $logo_size;
		background-image: url('/images/logo/tagaro-logo.png');
		background-size: $logo_size;
	}
	.circle {
		$circle_size: 63px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: $circle_size;
		height: $circle_size;
		margin-top: math.div($logo_size, 17);
		border: 4px solid;
		border-color: white;
		border-radius: 50%;
	}
	.invisible {
		visibility: hidden;
	}
	.icon {
		width: 0px;
	}
	.visible {
		width: 68%;
	}
	.scalar {
		min-height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
