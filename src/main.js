import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Roboto fonts
import 'typeface-roboto';

// Custom Bootstrap-vue
import './components/bootstrap';

// Custom Bootstrap-vue
import './plugins';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');