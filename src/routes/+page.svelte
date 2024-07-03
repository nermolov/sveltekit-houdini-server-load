<script lang="ts">
  import AnimeTitle from '$lib/AnimeTitle.svelte';
  import type { PageData } from './$houdini';

  export let data: PageData;
</script>

<AnimeTitle animeTitle={data?.data?.Media} />

<h3>Contents of `data`</h3>
<pre>{JSON.stringify(data, null, 2)}</pre>
