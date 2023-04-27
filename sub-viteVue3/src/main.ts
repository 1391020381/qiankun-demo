import { createApp } from 'vue'
import routes from './router/index'
import { createRouter ,createWebHistory} from 'vue-router';
import './style.css'
import App from './App.vue'
// createApp(App).mount('#app')
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const router = createRouter({
  routes,
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/viteVue3' : '/'),
})

let root: App;

function render(props: any) {
  const { container } = props;
  root = createApp(App).use(router)
  const c = container
    ? container.querySelector("#app")
    : document.getElementById("app")
  root.mount(c)
}

console.log(3333)

renderWithQiankun({
  mount(props) {
    console.log("vue3sub mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("vue3sub unmount");
    root.unmount();
  },
  update(props: any) {
    console.log("vue3sub update");
    console.log(props)
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}