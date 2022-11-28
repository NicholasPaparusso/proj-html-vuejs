import { createApp } from 'vue'

import App from './App.vue'

import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

createApp(App).use(VueCustomTooltip, {
  borderRadius: 5,
  background: '#20ad96',
  fontWeight: 700,
}).mount('#app')
