<script lang="ts">
    export let image: string;
    export let text: string;
    export let func: () => unknown;
    export let selected: boolean
</script>

<button on:click={func} class:selected>
    <img src={image} alt={text}>
    <p>{text}</p>
</button>

<style>
    .selected {
        background-color: gray;
    }
</style>
