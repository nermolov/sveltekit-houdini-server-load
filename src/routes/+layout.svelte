<script lang="ts">
  import type { LayoutData } from './$houdini';

  export let data: LayoutData;
  $: ({ LayoutQuery } = data);
</script>

<p>{$LayoutQuery?.data?.Character?.name?.full}</p>
<slot />
