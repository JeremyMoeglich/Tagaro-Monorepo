<script lang="ts">
	export let content: Array<{
		title: string;
		image: string;
	}>;
</script>

<body>
	<div class="main_alignment">
		{#each content as element}
			<div class="sender_box">
				<h3>element.title</h3>
				<img src={element.image} alt="" />
			</div>
		{/each}
	</div>
</body>

<style>
    .main_alignment {
        display: flex;
        flex-wrap: wrap;
    }
    .sender_box {
        max-width: 250px;
        width: 7vw;
        min-width: 125px;
        background-color: #f2f2f2;
        border-radius: 5px;
    }
</style>
