import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelopeOpenText,
  faUser,
  faStar,
  faStarHalfAlt,
  faStore,
  faPhone,
  faChevronDown,
  faChevronUp,
  faTape
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faFacebookF,
  faTwitter,
  faApple,
  faGooglePlusG,
  faPinterest,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons"; //fab

import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; //far

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEnvelopeOpenText,
  faUser,
  faStar,
  faStarHalfAlt,
  faStore,
  faPhone,
  faChevronDown,
  faChevronUp,
  faTape
); //fas

library.add(faEnvelope); //far

library.add(
  faFacebookF,
  faTwitter,
  faApple,
  faGooglePlusG,
  faPinterest,
  faTelegramPlane
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueAwesomeSwiper);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
