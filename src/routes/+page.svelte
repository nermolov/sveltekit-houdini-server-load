<script lang="ts">
  import AnimeTitle from '$lib/AnimeTitle.svelte';
  import type { PageData } from './$houdini';
  export let data: PageData;

  $: ({ AnimeQuery } = data);

  // $: console.log($AnimeQuery);
</script>

<AnimeTitle animeTitle={$AnimeQuery?.data?.Media} />
