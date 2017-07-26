// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Store } from '@/Store.js'
import FBSignInButton from 'vue-facebook-signin-button'



Store.checkAuth();


Vue.config.productionTip = false

/**
 * VueFire
 */
Vue.use(Vuefire);


/**
 * Vuetify
 */
Vue.use(Vuetify)



/**
 * Fb Signin
 */
Vue.use(FBSignInButton)


window.fbAsyncInit = function () {
  FB.init({
    appId: '446979352009018',
    cookie: true,  // enable cookies to allow the server to access the session
    xfbml: true,  // parse social plugins on this page
    version: 'v2.8' // use graph api version 2.8
  });
};
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/fr_FR/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
