<script lang="ts">
	export let text: string;
	export let name: string;
	export let selected: string;
	export let values: ReadonlyArray<typeof selected>;
</script>

<div>
	<p>{text}</p>
	<div class="radio">
		{#each values as value}
			<div>
				<label>
					<input type="radio" id={value} {value} {name} bind:group={selected} />
					{value}
				</label>
			</div>
		{/each}
	</div>
</div>

<style>
	p {
		color: blue;
	}
	.radio {
		display: flex;
		flex-direction: column;
		gap: 5px;
		min-height: 45px;
		width: 290px;
		border: 1px solid black;
		padding: 20px 5px;
	}
</style>
