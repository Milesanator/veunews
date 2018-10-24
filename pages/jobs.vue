<template>
  <div>
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
    await store.dispatch("LOAD_ITEMS", "jobstories.json")
  }
}
</script>
