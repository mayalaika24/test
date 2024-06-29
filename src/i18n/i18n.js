import { createI18n } from 'vue-i18n';
import { en, ar } from "./locals.js";

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            hello: en
        },
        fr: {
            hello: ar
        }
    }
});

export default i18n;