import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
