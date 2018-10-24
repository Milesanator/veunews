<template>
  <div :class="darkMode ? 'dark-mode' : 'light-mode'" class="container">
    <div class="bird-container">
      <div class="bird" :class="birdSpeaking ? 'speaking' : 'none'" @click.prevent="toggleBird()">
        <div class="speech-bubble">The first word is banana</div>
      </div>
    </div>
    <h1 class="pa4 ma0">Dumb-puzz</h1>
    <header>
      <nav class="flex w-75 justify-around f4 code pa1">
        <nuxt-link class="link underline-hover" to="/" exact>Home</nuxt-link>
        <nuxt-link class="link underline-hover" to="/new">New</nuxt-link>
        <nuxt-link class="link underline-hover" to="/show">Show</nuxt-link>
        <nuxt-link class="link underline-hover" to="/ask">Ask</nuxt-link>
        <nuxt-link class="link underline-hover" to="/jobs">Jobs</nuxt-link>
      </nav>
    </header>
    <a @click.prevent="toggleMode()" class="mode-toggle">
      <template v-if="darkMode">
        use light mode
      </template>
      <template v-else>
        use dark mode
      </template>
    </a>
    <solution />
    <nuxt />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import solution from '~/components/solution'

export default {
  computed: mapState([
    "darkMode",
    "birdSpeaking"
  ]),
  methods: {
    ...mapActions([
      'toggleMode',
      'toggleBird'
    ])
  },
  components: {
    solution
  }
}
</script>

<style scoped>
  .nuxt-link-active {
    text-decoration: underline;
  }

  .mode-toggle {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px
  }
</style>
