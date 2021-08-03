<template>
  <div id="app">
    <div id="nav">sub-vue</div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('global', {
      user: (state) => state.user
    })
  },
  methods: {
    ...mapActions('global', ['setGlobalState']),
    update () {
      this.setGlobalState('user', { name: '张三' })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
