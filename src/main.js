import { createApp } from 'vue'
import './assets/sass/main.scss'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from "../store/index.js";
import router from "../router/index.js";
import i18n from "./i18n/i18n.js";
import { defineRule, configure } from 'vee-validate';
import { Field, Form, ErrorMessage } from 'vee-validate';
import Notifications from '@kyvg/vue3-notification'
defineRule('required', (value) => {
    if (!value || value === '') {
        return 'This field is required';
    }
    return true;
});
defineRule('numeric', (value) => {
    const regex = /^[0-9]+$/
    return regex.test(value)
});

configure({
    generateMessage: context => context.locale === 'en' ? context.message : '',
});

const app = createApp(App)
app.component('Field', Field).component('Form', Form).component('ErrorMessage', ErrorMessage).use(router).use(store).use(Notifications).use(i18n).mount('#app')
