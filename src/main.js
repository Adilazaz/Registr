import { createApp } from 'vue'
import router from "./router";
import Antd from 'ant-design-vue';
import App from './App.vue'

import DashboardLayout from './layouts/Dashboard.vue'
import DefaultLayout from './layouts/Default.vue'
import store from "./store";
import 'ant-design-vue/dist/reset.css';
import './scss/app.scss';
import print from 'vue3-print-nb';

const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(store)
app.use(print);

app.component("layout-dashboard", DashboardLayout);
app.component("layout-default", DefaultLayout);

app.mount('#app')

