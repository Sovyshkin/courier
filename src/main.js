import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router/router";

axios.defaults.baseURL = "http://38.180.172.243:3000/";

createApp(App).use(router).mount("#app");
