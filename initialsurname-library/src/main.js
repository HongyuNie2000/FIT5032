
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
