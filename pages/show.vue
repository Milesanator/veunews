<template>
  <div>
    <div class="floaty-clue inverse code">There is commenter in Home who doesn't belong.</div>
    <Items />
  </div>
</template>
<script>
import Items from '~/components/items'
export default {
  components: {
    Items
  },
  async fetch({ store }) {
    await store.dispatch("LOAD_ITEMS", "showstories.json")
  }
}
</script>
