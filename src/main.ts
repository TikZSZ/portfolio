
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'
import './index.css'
import { useStore } from './store';
import "nprogress/nprogress.css"
import NProgressBar from './progress-bar'
// process.env.baseUrl = "http://localhost:3000"

NProgressBar(router)

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')

