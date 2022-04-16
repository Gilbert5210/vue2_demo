<template>
    <div class="market-list">
		<el-table
			:data="tableData"
			height="100%"
			v-loading="loading"
			:cell-style="_cellStyle"
			stripe
			border
			class="market-list__table">
			<el-table-column
				prop="produceId"
				:label="$t('产品标识')"
				width="280">
			</el-table-column>
			<el-table-column
				prop="bidSize"
				:label="$t('买入量')">
			</el-table-column>
			<el-table-column
				prop="bidPrice"
				:label="$t('买入价')">
				<template slot-scope="{row}">
					<span @click="mixin_showOrderWin(row)"
						class="market-list__table-btn">{{row.bidPrice}}</span>
				</template>
			</el-table-column>
			<el-table-column
				prop="offerPrice"
				:label="$t('卖出价')">
				<template slot-scope="{row}">
					<span @click="mixin_showOrderWin(row)"
						class="market-list__table-btn">{{row.offerPrice}}</span>
				</template>
			</el-table-column>
			<el-table-column
				prop="offerSize"
				:label="$t('卖出量')">
			</el-table-column>
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

const COLOR_MAP = {
	bidPrice: 'green',
	offerPrice: 'orange'
}
const INTERVEL_TIME = 1000 * 5

export default {
    name: 'MarketList',

	mixins: [OrderMixin],

    data() {
        return {
			tableData: [],
			loading: false
        }
    },

	mounted () {
		this._loadMarketList()
		this._createUpdateDataIntervel()
	},

	methods: {
		_createUpdateDataIntervel () {
			let loadMarketDataIntervel = setInterval(() => {
				this._loadMarketList(false)
			}, INTERVEL_TIME)
			this.$once('hook:beforeDestroy', () => {
				clearInterval(loadMarketDataIntervel)
				loadMarketDataIntervel = null
			})
		},

		async _loadMarketList (showMask = true) {
			showMask && (this.loading = true)
			let {data} = await this.$axios.get('/marketList')
			this.loading = false

			if (data.success) {
				this.tableData = data.data
			}
		},

		_cellStyle ({column}) {
			return COLOR_MAP[column.property] ? `color: ${COLOR_MAP[column.property]}` : ''
		},

		updateTableList () {
            this._loadMarketList()
        }
	}
}
</script>

<style lang='less' scoped>
.market-list {
	&__table {
		width: 100%;

		&-btn {
			cursor: pointer;
			&:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>
