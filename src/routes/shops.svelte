<script lang="ts">
	import * as shops_vars from '$lib/vars/urls';
</script>

<body>
	<div class="alignment">
		{#each shops_vars.shops as item}
			<a href={item.route}>{item.name}</a>
		{/each}
	</div>
</body>

<style>
    .alignment {
        display: flex;
        justify-content: space-between;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        padding: 70px 0px;
    }
    a {
		padding: 30px 40px;
		background: linear-gradient(to bottom right,#49358d,#027fc7);
		color: white;
		z-index: 0;
		max-width: fit-content;
		text-decoration: none;
    }
    a:hover {
        background: linear-gradient(to bottom right,#49358d,rgb(35, 82, 109));
    }
</style>
