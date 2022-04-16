/**
 * 快速下单弹窗的mixins
 */
import OrderForm from '../../components/order_form.vue'

export default {
    components: {
        OrderForm
    },

    data () {
        return {
            mixin_dialogVisible: false,
            mixin_rowData: {}
        }
    },
    methods: {
        mixin_handleClose () {
            this.mixin_dialogVisible = false
        },

        async mixin_handleSubmit (isBuy) {
            let isValid = this.$refs.orderForm.isValid()
            let formData = this.$refs.orderForm.getData()

            console.log(`isBuy: ${isBuy}-----formData----${formData}`)

            if (!isValid) {
                return
            }

            let currUrl = isBuy ? '/buy' : '/sell'
            let {data} = await this.$axios.post(currUrl, formData)
            let {success, message} = data

            let msg = message || success ? $t('操作成功') : $t('操作失败')
            let type = success ? 'success' : 'error'

            this.$message({
                message: msg,
                type
            })

            success && (this.mixin_dialogVisible = false)

            // 买、卖成功后，需要重新获取最新数据
            success && this.updateTableList()
        },

        mixin_showOrderWin (row, history = false) {
            this.mixin_dialogVisible = true
            this.mixin_rowData = history
                ? {
                    ...row
                }
                : {
                    ...row,
                    price: row.bidPrice,
                    quantity: row.bidSize
                }

                this.$refs.orderForm && this.$refs.orderForm.setData(this.mixin_rowData)
		}
    }
}