<template>
	<div class="home">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<top msg="We" />
		<div style="background: #fff;margin-bottom: 40px;width: 700px;padding: 40px;margin: 50px auto;">
			<el-radio-group v-model="labelPosition" size="small">
				<el-radio-button label="left">左对齐</el-radio-button>
				<el-radio-button label="right">右对齐</el-radio-button>
				<el-radio-button label="top">顶部对齐</el-radio-button>
			</el-radio-group>
			<div style="margin: 20px;"></div>
			<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
				<el-form-item label="用户名"><el-input v-model="formLabelAlign.name"></el-input></el-form-item>
				<el-form-item label="密码"><el-input v-model="formLabelAlign.region"></el-input></el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
				<el-button @click="resetForm('ruleForm')">立即注册</el-button>
			</el-form>
		</div>
		<foot msg="o" />
	</div>
</template>

<script>
// @ is an alias to /src
import top from '@/components/top.vue';
import foot from '@/components/foot.vue';
export default {
	name: 'login',
	data() {
		return {
			labelPosition: 'right',
			formLabelAlign: {
				name: '',
				region: '',
				type: ''
			}
		};
	},
	components: {
		top,
		foot
	}
};
</script>
<style scoped>
.home {
	background: #f5f5f5;
}
</style>
