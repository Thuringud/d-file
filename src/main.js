import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

const app = createApp(App).use(store);

app.config.globalProperties.axios = axios;

app.mount("#app");
