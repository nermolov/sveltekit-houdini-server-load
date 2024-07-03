<script lang="ts">
  import type { PageData } from './$houdini';
  export let data: PageData;

  $: ({ AnimeQuery } = data);

  $: console.log($AnimeQuery);
</script>

<h1>{$AnimeQuery?.data?.Media?.title?.english}</h1>
