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

  // hack workaround for https://github.com/HoudiniGraphql/houdini/issues/1314
  $: animeTitleData = ($animeTitleFragment ??
    animeTitle) as typeof $animeTitleFragment;
</script>

<h1>{animeTitleData?.title?.english}</h1>
