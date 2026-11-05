
import { createSSRApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'
import './index.css'
import "nprogress/nprogress.css"
import NProgressBar from './progress-bar'

NProgressBar(router)

const app = createSSRApp(App)
  .use(createPinia())
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});

