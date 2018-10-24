<template>
  <div>
    <div class="floaty-clue inverse code">There is a clue hidden in the comments of Home.</div>
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
