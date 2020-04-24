import Vue from 'vue';

import VueInputMask from 'vue-inputmask';
Vue.use(VueInputMask.default);

import {
    configure,
    extend,
    localize,
    ValidationObserver,
    ValidationProvider,
} from 'vee-validate';
import {
    email,
    required,
    image
} from 'vee-validate/dist/rules';


localize({
    en: {
        messages: {
            required: 'Поле является обязательным к заполнению',
            phone: 'Неверный формат номера',
            email: 'Email введен некорректно',
            receipt: 'Загрузите фотографию чека',
        },
    },
});



extend('required', {
    ...required,
});

extend('email', email);

extend('phone', (value) => {
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
});

configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid--vue',
        dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
    },
});


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);