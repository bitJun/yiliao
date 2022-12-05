import { createApp } from 'vue';
import Router from './router';
import Store from './store';
import App from './App.vue';
import { permission } from "./directives/permission";
// import './assets/css/APlayer.min.css';
// import './assets/js/jsencrypt.js';
import './assets/js/md5.js';
import './assets/js/gVerify.js';
const app = createApp(App);
app.use(Store);
app.use(Router);
app.directive("permission", permission);
app.mount('#app');
//# sourceMappingURL=main.js.map