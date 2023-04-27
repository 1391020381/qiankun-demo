<template>
  <div>
    <h1>vue2 子应用</h1>
    <h2 class="parent">主应用中的信息 -> 姓名: {{ state.name }} count：{{ state.count }}</h2>
    <h2 class="router">Router传递的数据: 姓名: {{ this.routeQuery.name }}, 年龄: {{ this.routeQuery.age }}</h2>
    
    <el-divider></el-divider>

    <el-card class="box-card">
      <el-form inline :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.postion" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    
    <el-button-group>
      <el-button type="primary" @click="goPage2">页面2</el-button>
      <el-button type="success" @click="goBaseSystem">主系统</el-button>
      <el-button type="info" @click="goVue3ChildPro">vue3 子应用</el-button>
      <el-button type="danger" @click="commitGlobalVuexCount">更改主应用vuex数据</el-button>
    </el-button-group>
  </div>
</template>

<script>
import actions from '@/qiankun/actions'
export default {
  data() {
    return {
      routeQuery: {},
      formInline: {
        user: "",
        postion: ""
      },
      state: null
    }
  },
  created() {
    this.getRouterQuery()
    this.initGlobalData()
  },
  methods: {
    // 初始化全局监听器
    initGlobalData() {

      actions.onGlobalStateChange((parentState) => {
        this.state = parentState
      }, true)
    },
    goVue3ChildPro() {
      actions.parentRouter.push({
        path: "/vue3/pageOne",
        query: {
          name: "吴久",
          age: 122
        }
      })
    },
    commitGlobalVuexCount() {
      actions.setGlobalState({
        name: "赵六",
        count: this.state.count + 5
      })
    },
    getRouterQuery() {
      this.routeQuery = this.$route.query || {}
    },
    goPage2() {
      this.$router.push({
        path: "pageTwo"
      })
    },
    goBaseSystem() {
      // 这里使用项目父应用的router进行跳转
      actions.parentRouter.push({
        path: "/qiankun-home",
        query: {
          status: 1,
          statusName: "vue2子应用的数据"
        }
      })
    }
  }
}
</script>

<style scoped>
.parent {
  color: red
}
.router {
  color: rgb(12, 157, 109);
}
</style>