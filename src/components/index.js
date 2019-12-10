import Toast from './popup/toast/toast'
import CountDown from './countDown/countDown'
import Filters from './Filters'
// import Modal from '../components/ui_compontents/modal/modal.vue'
// import wfButton from '../components/ui_compontents/button/button.vue'
// import wfHeader from '../components/ui_compontents/header/wfHeader.vue'
// import Tabs from '../components/ui_compontents/tabs/tabs.vue'
// import bottomLine from '../components/ui_compontents/bottomLine/bottomLine.vue'
// import noList from '../components/ui_compontents/noList/noList.vue'
// import awardsDialog from '../components/awardsDialog/awardsDialog'
import loading from './loading/loading'

// 自定义全局组件
const components = [
  // Modal,
  // wfButton,
  // Tabs,
  // wfHeader,
  // bottomLine,
  // noList,
  // awardsDialog,
  loading,
  CountDown
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })

  Filters.map(filter => {
    Vue.filter(filter.name, filter.method)
  })
  Vue.use(Toast)
}

// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
