import { createApp } from 'vue'
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueTippy from 'vue-tippy'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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
      delay: [300, 50],
    }, // => Global default options * see all props
  }
)

app.use(VueSweetalert2);


app.mount('#app')
