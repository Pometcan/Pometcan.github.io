<script>
    import { onMount } from 'svelte';

    let isMobile = false;
    onMount(() => {
        isMobile = window.innerWidth < 600;
        window.addEventListener("resize", () => {
            isMobile = window.innerWidth < 600;
        });
    });
</script>
{#if isMobile}
    <p class="text-Green">This is mobile</p>
{:else}
    <p class="text-Red">This is web</p>
{/if}