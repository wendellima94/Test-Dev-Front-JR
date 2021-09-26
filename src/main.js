import Vue from "vue";
import App from "./App.vue";

import Unicon from "vue-unicons/dist/vue-unicons-vue2.umd";
import {
  uniClock,
  uniGraduationCap,
  uniAngleLeft,
  uniAngleRight,
} from "vue-unicons/dist/icons";

Unicon.add([uniClock, uniGraduationCap, uniAngleLeft, uniAngleRight]);

Vue.use(Unicon);
// global css
import "@/assets/styles/global.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
