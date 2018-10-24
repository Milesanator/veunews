<template>
  <div>
    <h1>New</h1>
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
    await store.dispatch("LOAD_ITEMS", "newstories.json")
  }
}
</script>
