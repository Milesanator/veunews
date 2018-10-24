<template>
  <div>
    <div class="floaty-clue code">The answer is 3 words.</div>
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
    await store.dispatch("LOAD_ITEMS", "topstories.json")
  }
}
</script>
