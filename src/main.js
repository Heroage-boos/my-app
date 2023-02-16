import { createApp } from 'vue'
import App from './App.vue'
import MetaInfo from 'vue-meta-info' //SE0 针对每个页面对他们的meta-info分别设置，这里可以使用vue-meta-info插件

const app = createApp(App)

app.use(MetaInfo)

createApp.mounted = () => {
  document.dispatchEvent(new Event('render-event'))
}

app.mount('#app')

//vue3版本不支持直接引用VUE
// Vue.use(MetaInfo)
// new Vue({
//   el: '#app',
//   render: h => h(App),
//   mounted() {
//     document.dispatchEvent(new Event('render-event'))
//   }
// })
