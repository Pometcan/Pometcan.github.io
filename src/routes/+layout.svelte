<script>
    export const prerender = true;
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
{:else}
{/if}
<slot />
{#if isMobile}
<footer class="flex">
    <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>
    </div>
</footer>
{:else}
{/if}