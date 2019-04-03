import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCoffee,
  faShieldAlt,
  faQuoteLeft,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faChevronRight,
  faBars,
  faSquare,
  faCalendar,
  faCircle,
  faPencilAlt,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelopeOpenText,
  faUser,
  faStar,
  faStarHalfAlt,
  faStore
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faFacebookF,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faApple,
  faGooglePlusG,
  faPinterest
} from "@fortawesome/free-brands-svg-icons"; //fab

import { faCommentAlt } from "@fortawesome/free-regular-svg-icons"; //far

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCircle,
  faPencilAlt,
  faBars,
  faCalendar,
  faSquare,
  faQuoteLeft,
  faChevronRight,
  faLaptop,
  faCoffee,
  faShieldAlt,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faUserSecret,
  faCaretDown,
  faTh,
  faDumbbell,
  faEnvelopeOpenText,
  faUser,
  faStar,
  faStarHalfAlt,
  faStore
); //fas

library.add(faCommentAlt); //far

library.add(
  faLinkedinIn,
  faFacebookSquare,
  faFacebookF,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble,
  faApple,
  faGooglePlusG,
  faPinterest
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
