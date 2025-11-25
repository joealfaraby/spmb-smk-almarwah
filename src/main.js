import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { register } from 'swiper/element/bundle';
register();

const app = createApp(App)

app.mount('#app')