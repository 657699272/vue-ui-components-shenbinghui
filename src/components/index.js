import Vue from 'vue'
import Test from './test.vue'
import Hello from './hello.vue'
const Components = {
    Test,
    Hello
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
