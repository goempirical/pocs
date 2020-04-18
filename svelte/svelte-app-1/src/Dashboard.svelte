<script>
    import Metrics from "./Metrics.svelte"
    import About from "./About.svelte"
    import NewScreen from "./NewScreen.svelte"
    export let page;
    //alert(page)
</script>


<h1> We will load page {page}</h1>
{#if page === "metrics"}
    <Metrics/>
{:else if page === "about"}
    <About/>
{:else if page === "new-screen"}
    <NewScreen/>
{/if}