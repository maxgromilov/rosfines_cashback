import Vue from 'vue';
import './custom.scss';

// Bootstap-vue components
import {
    LayoutPlugin,
    ButtonPlugin,
    AspectPlugin,
    ImagePlugin,
    FormRadioPlugin,
    FormPlugin
} from 'bootstrap-vue';

Vue.use(FormRadioPlugin)
Vue.use(LayoutPlugin);
Vue.use(ButtonPlugin);
Vue.use(AspectPlugin);
Vue.use(ImagePlugin);
Vue.use(FormPlugin)