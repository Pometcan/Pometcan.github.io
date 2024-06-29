<script>
    export let data;;
</script>
<h1 class="text-2xl text-Text">Blog</h1>
<div class="m-4 p-2 bg-Base border-2">
    <h1 class=" text-2xl">{data.post.title}</h1>
    <p class=" text-Subtext0 left-full">{data.post.date}</p>
    <p class="text-Subtext1">{data.post.content}</p>
</div>