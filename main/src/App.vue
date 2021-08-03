<template>
  <div id="layout-wrapper">
    <el-row>
      <el-col :span="6">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>侧边导航</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="item in microApps"
                :class="{ active: item.activeRule === current }"
                :key="item.name"
                @click="goto(item)"
                >{{ item.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18"><div id="subapp-viewport"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import microApps from './micro-app'
export default {
  name: 'App',
  data () {
    return {
      isLoading: true,
      loading: null,
      microApps,
      current: '/sub-vue'
    }
  },
  created () {
    this.bindCurrent()
  },
  mounted () {
    this.listenRouterChange()
  },
  methods: {
    listenRouterChange () {
      const _wr = function (type) {
        const orig = history[type]
        return function () {
          const rv = orig.apply(this, arguments)
          const e = new Event(type)
          e.arguments = arguments
          window.dispatchEvent(e)
          return rv
        }
      }
      history.pushState = _wr('pushState')
      window.addEventListener('pushState', this.bindCurrent)
      window.addEventListener('popstate', this.bindCurrent)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('pushState', this.bindCurrent)
        window.removeEventListener('popstate', this.bindCurrent)
      })
    },
    goto (item) {
      history.pushState(null, item.activeRule, item.activeRule)
    },
    bindCurrent () {
      const path = window.location.pathname
      if (this.microApps.findIndex((item) => item.activeRule === path) >= 0) {
        this.current = path
      }
    },
    showLoading () {
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
  },
  watch: {},
  components: {}
}
</script>
