<template>
  <div>
    <template v-if="user.id === 'doesntbelong'">
      <div class="pa4 code">
        The second word is something all the jobs have in common
      </div>
    </template>
    <template v-else>
      <div class="pa4 code">
        {{user.id}} has been a user {{user.created| timeSince}}
      </div>
    </template>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      user: {
        id: ''
      }
    }
  },
  async asyncData({ route }) {
    if (route.params.id === 'doesntbelong') {
      return {
        user: {
          id: route.params.id
        }
      }
    }

    const resp = await axios.get(`/user/${route.params.id}.json`)

    return {
      user: resp.data
    }
  }
}
</script>
