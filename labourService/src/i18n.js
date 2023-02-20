import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import translationEN from './locale/en/translationEN.json';
import translationHI from './locale/hi/translationHI.json';
import translationMA from './locale/ma/translationMA.json';

//the translations
const resources ={
    en: {
        translation: translationEN
    },
    hi: {
        translation: translationHI
    },
    ma: {
        translation: translationMA
    }
};

i18n
    .use(initReactI18next) //passes i18n down to react-i18next
    .init({
        resources,
        lng:'en',

        KeySeparator: false, //we do not use key in form messages.welcome

        interpolation:{
            escapeValue: false, //react already safes from xss
        }  
    })

export default i18n;
