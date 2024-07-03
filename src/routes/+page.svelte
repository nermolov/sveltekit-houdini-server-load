<script lang="ts">
  import AnimeTitle from '$lib/AnimeTitle.svelte';
  import type { PageData } from './$houdini';

  export let data: PageData;
</script>

<AnimeTitle animeTitle={data?.data?.Media} />
