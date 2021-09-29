<script lang="ts">
import { object_without_properties } from "svelte/internal";



	export let components: Array<{
		title: string;
		image: string;
		points: Array<string>;
		subtitle: string;
		info_text: string;
	}>;

	let indexed_components: Array<{
		title: string;
		image: string;
		points: Array<string>;
		subtitle: string;
		info_text: string;
		id: number;
	}> = []
	for (const [index, element] of components.entries()) {
		indexed_components.push({
			...element,
			id : index
		})
	};

	function get_x_pos(index) {
		return index % indexed_components.length
	}
	function lerp(v1, v2, f) {
		if (f < 0 || f > 1) {
			
		}
		return v1*(1-f) + v2*f
	}
		 

	let center_index = Math.floor(indexed_components.length / 2);
	let current_x_pos = center_index

	let css_vars = {
		element_spacing: "50px",
		box_width: "calc(10vw + 200px)",
		x_padding: "20px",
		actual_width: "calc(var(--box_width) + var(--x_padding) * 2)",
		background_color: "#f2f2f2",
		outer_padding: "100px"
	}

	$: css_vars_style = ":root{"+ Object.entries().forEach({
		
	}) +"}"
</script>

<div class="main_container" style={css_vars_style}>
	<div class="alignment">
		{#each components as item}
			<div class="package_alignment {item == center_index ? 'middle_element' : ''}">
				<h3>{item.title}</h3>
				<img src={item.image} alt="" />
				<ul>
					{#each item.points as point}
						<li>{@html point}</li>
					{/each}
				</ul>
				<h3>{item.subtitle}</h3>
				<p>{item.info_text}</p>
			</div>
		{/each}
	</div>
	<div class="cover_elements">
		<div class="cover cover_element" />
		<div class="t cover_element" />
		<div class="cover cover_element" />
	</div>
</div>

<style>
	:root {
		--element_spacing: 50px;
		--box_width: calc(10vw + 200px);
		--x_padding: 20px;
		--actual_width: calc(var(--box_width) + var(--x_padding) * 2);
		--background_color: #f2f2f2;
		--outer_padding: 100px;
	}
	ul {
		list-style: none;
		padding-left: 0px;
	}

	.alignment {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		gap: var(--element_spacing);
	}
	.package_alignment {
		padding: 30px var(--x_padding);

		border-radius: 2px;
		max-width: var(--box_width);
		min-width: var(--box_width);
	}
	.middle_element {
		box-shadow: 0 6px 20px 0 rgb(0 0 0 / 12%);
		background-color: white;
	}
	.cover {
		background-color: var(--background_color);
		min-width: 100%;
	}
	.t {
		min-width: calc(var(--actual_width) * 3 + var(--element_spacing) * 3);
	}
	.cover_element {
		position: relative;
		min-height: 60px;
	}
	.cover_elements {
		display: flex;
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;
		justify-content: center;
		min-width: 100%;
		min-height: 100%;
	}
	.main_container {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: var(--background_color);
		padding: var(--outer_padding) 0px;
	}
</style>
