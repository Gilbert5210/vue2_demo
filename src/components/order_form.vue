<template>
    <div class="order-form">
		<el-form :model="form"
			label-position="left"
			ref="orderForm"
			:rules="rules"
			:label-width="formLabelWidth">
			<el-form-item :label="$t('产品标识')">
				<span>{{form.produceId}}</span>
			</el-form-item>

			<el-form-item :label="$t('数量')" prop="quantity">
				<el-input v-model.number="form.quantity" autocomplete="off"></el-input>
			</el-form-item>

			<el-form-item :label="$t('价格')" prop="price">
				<el-input v-model.number="form.price" autocomplete="off"></el-input>
			</el-form-item>

			<el-form-item :label="$t('投资组合')">
				<el-select v-model="form.portfolio"
					class="order-form__select">
					<el-option
						v-for="item in portfolioOpts"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
const defaultFormData = () => {
	return {
		produceId: '',
		quantity: '',
		price: '',
		portfolio: ''
	}
}
const DEFAULT_RULE = { type: 'number', required: true, message: $t('请输入有效数字'), trigger: 'blur' }
export default {
    name: 'OrderForm',

	props: {
		formData: Object
	},

	mounted () {
		this.form = this.formData
	},

    data() {
        return {
			form: defaultFormData(),
			rules: {
				quantity: [
					DEFAULT_RULE
				],

				price: [
					DEFAULT_RULE
				]
			}
        }
    },

	computed: {
		formLabelWidth () {
			return '120px'
		},

		portfolioOpts () {
			return [{
				label: 'Default',
				value: 'Default'
			}, {
				label: 'Other',
				value: 'Other'
			}]
		}
	},

	methods: {
		getData () {
			return this.form
		},

		setData (data) {
			this.form = {...data}
		},

		isValid () {
			let result = true
			this.$refs.orderForm.validate((valid) => {
				if (!valid) {
					result = false
					return false
				}
			})

			return result
		},

		resetForm() {
			this.$refs.orderForm.resetFields()
		}
	}
}
</script>

<style lang='less' scoped>
.order-form {
	&__select {
		width: 100%;
	}
}
</style>
