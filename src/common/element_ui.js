import {
    Button,
    Select,
    Option,
    Table,
    TableColumn,
    Loading,
    Menu,
    MenuItem,
    Dialog,
    Form,
    FormItem,
    Input,
    Message
 } from 'element-ui'

const elementUI = {
    install: Vue => {
        Vue.use(Button)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Loading)
        Vue.use(MenuItem)
        Vue.use(Menu)
        Vue.use(Dialog)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Input)

        Vue.prototype.$message = Message
    }
}

export default elementUI
