<template>
    <div class="history-list">
		<el-table
			:data="tableData"
			height="100%"
			v-loading="loading"
			stripe
			border
            @row-click="_onRowClick"
			style="width: 100%">
			<el-table-column
				prop="produceId"
				:label="$t('产品标识')"
				width="280" />
			<el-table-column
				prop="quantity"
				:label="$t('数量')" />
			<el-table-column
				prop="price"
				:label="$t('价格')" />
			<el-table-column
				prop="portfolio"
				:label="$t('投资组合')" />
			<el-table-column
				prop="buyType"
                :formatter="_buyTypeFormatter"
				:label="$t('买/卖')" />
            <el-table-column
				prop="dateTime"
				:label="$t('下单时间')" />
		</el-table>

        <el-dialog
			:title="$t('下单窗口')"
			:visible.sync="mixin_dialogVisible"
			width="30%"
			:before-close="mixin_handleClose">

			<order-form :form-data="mixin_rowData"
				ref="orderForm" />

			<span slot="footer" class="dialog-footer">
				<el-button @click="mixin_handleClose">{{$t('取消')}}</el-button>
				<el-button type="danger" @click="mixin_handleSubmit(true)">{{$t('买')}}</el-button>
				<el-button type="success" @click="mixin_handleSubmit(false)">{{$t('卖')}}</el-button>
			</span>
		</el-dialog>
    </div>
</template>

<script>
/**
 * 该表格目前是demo,后续在大数据量的场景的话，考虑解决方案：
 * 1. 分页
 * 2. 虚拟滚动加载
 */
import OrderMixin from '../common/mixins/order_modal'

export default {
    name: 'HistoryList',

    mixins: [OrderMixin],

    data() {
        return {
			tableData: [],
			loading: false
        }
    },

	mounted () {
		this._loadHistoryList()
	},

	methods: {
		async _loadHistoryList () {
			this.loading = true
			let {data} = await this.$axios.get('/historyList')
			this.loading = false

			if (data.success) {
				this.tableData = data.data
			}
		},

        _buyTypeFormatter (row, column, cellValue) {
            return cellValue ? $t('买') : $t('卖')
        },

        _onRowClick (row) {
            this.mixin_showOrderWin(row, true)
        },

        updateTableList () {
            this._loadHistoryList()
        }
	}
}
</script>

<style lang='less' scoped>
.history-list {
}
</style>
