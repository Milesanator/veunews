<template>
  <div>
    <h1>Ask</h1>
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
    await store.dispatch("LOAD_ITEMS", "askstories.json")
  }
}
</script>
