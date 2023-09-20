import { createApp } from 'vue'
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueTippy from 'vue-tippy'
const app = createApp(App)
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    defaultProps: {
      allowHTML: true,
      placement: 'top',
      delay: [600, 50]
    }, // => Global default options * see all props
  }
)


app.mount('#app')
