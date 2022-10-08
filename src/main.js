import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Theme from 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row'; 


const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(Dialog)
app.use(Button)
app.use(Theme)
app.use(Column)
app.use(DataTable)
app.use(ColumnGroup)
app.use(Row)


app.mount('#app')

