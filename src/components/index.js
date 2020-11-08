import Vue from 'vue'
import Test from './test.vue'
import Hello from './hello.vue'
import HuaweiButton from './huawei-button.vue'
const Components = {
    Test,
    Hello,
    HuaweiButton
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
