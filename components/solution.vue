<template>
  <div class="pa2 crappy-form">
    <template v-if="failed">
      <p>Wrong. You need to know more...</p>
    </template>
    <template v-else>
      <p>Do you know the answer?</p>
    </template>
    <form @submit.prevent="checkAnswer(answer)">
      <input type="text" v-model="answer" />
      <input type="submit" value="Check" />
    </form>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      answer: ''
    }
  },
  computed: {
    ...mapState({
      failed: state => state.failed
    })
  },
  methods: {
    ...mapActions([
      'checkAnswer'
    ])
  }
}
</script>

<style scoped>
  .crappy-form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
