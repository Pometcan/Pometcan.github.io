<script>
	export let data;
</script>

<h1 class="text-2xl text-Text">Blog</h1>
<ul>
    {#each data.groups as group}
        <h1 class="text-2xl text-Text">{group}</h1>
        {#each data.summaries as dt}
        {#if dt.group === group}
            <li>
                <a href="/blog/{dt.slug}">
                    <div class="m-4 p-2 border-2 bg-Base">
                        <h1 class="text-2xl text-Text">{dt.title}</h1>
                        <p class="text-Text">{dt.date}</p>
                        <p class="text-Text">{dt.description}</p>
                    </div>
                </a>
            </li>
        {/if}
        {/each}
    {/each}
</ul>
