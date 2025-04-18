import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router'; // Добавили маршрутизатор

const app = createApp(App);
app.use(i18n);
app.use(router); // Подключили маршрутизатор
app.mount('#app');
