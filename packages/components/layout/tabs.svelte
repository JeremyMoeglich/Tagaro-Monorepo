<script lang="ts">
	import { SvelteComponent } from "svelte";

	export let tabs: {
		name: string;
		component: typeof SvelteComponent<{}>;
	}[];
    export let active = 0;
</script>

<div class="outer">
    <div class="tabs">
        {#each tabs as { name }, i}
            <button
                class="tab"
                class:active={i === active}
                on:click={() => active = i}
            >
                {name}
            </button>
        {/each}
    </div>
    <div>
        {#each tabs as { component }, i}
            {#if i === active}
                <svelte:component this={component} />
            {/if}
        {/each}
    </div>
</div>


<style>
    .tabs {
        display: flex;
        background-color: rgb(209, 209, 209);
    }
    .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: auto;
        padding: 5px;
        height: fit-content;
        color: black;
        font-weight: bold;
    }
    .tab:hover {
        background-color: rgb(163, 184, 255);
    }
    .tab:hover.active {
        background-color: rgb(78, 117, 255);
    }
    .active {
        background-color: rgb(78, 117, 255);
    }
</style>