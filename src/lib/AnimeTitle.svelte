<script lang="ts">
  import { fragment, graphql, type AnimeTitleFragment } from '$houdini';

  export let animeTitle: AnimeTitleFragment | null | undefined;
  $: animeTitleFragment = fragment(
    animeTitle,
    graphql`
      fragment AnimeTitleFragment on Media {
        title {
          romaji
          english
          native
        }
      }
    `
  );
</script>

<h1>{$animeTitleFragment?.title?.english}</h1>
