<template>
  <div>
    <div class="bb mb4">
      <div class="mb1">
        <span class="i">{{item.id}}</span>
        <template v-if="item.time">
          <nuxt-link :to="'/users/' + item.by">{{item.by}}</nuxt-link> {{item.time | timeSince }} ago
        </template>
      </div>
      <div class="f6" v-html="item.text" />
    </div>
    <ul class="ml3">
      <comment v-for="id in item.kids" :key="id" :id="id" />
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  name: 'comment',
  data() {
    return {
      item: {},
      kids: []
    }
  },
  props: [
    'id'
  ],
  async beforeMount() {
    const resp = await axios.get(`item/${this.id}.json`)
    this.item = resp.data
  },

  async mounted() {
    if(this.item.kids) {
      const idToPromise = id => axios.get(`item/${id}.json`)
      const kidPromises = this.item.kids.map(idToPromise)
      const kidResps = await Promise.all(kidPromises)
      this.kids = kidResps.map((res => res.data))
    }
  }
}
</script>
