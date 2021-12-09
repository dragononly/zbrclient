<template>
	<div class="home">

		<top msg="false" />
		<div>
			<img width="100%" height="547px" src="../../assets/c3/logo.jpg" alt="">
		</div>
		<div style="width: 80%;margin: auto;">
			<div style="text-align: left;padding:50px 0;padding-top: 80px;">
				<img width="400px" src="../../assets/c3/1.png">
			</div>
			<el-row :gutter="10">
				<el-col v-for="(a,b) in list" :key="b" :md="4">
					<div class="h">{{a}}</div>
				</el-col>
			</el-row>
			<el-row :gutter="20" style="margin-top: 20px;">
				<el-col :md="12">
					<img width="100%" src="../../assets/c3/1.jpg">
				</el-col>
				<el-col :md="12" style="text-align: left;padding-left: 50px;color: #666464;">
					<div>名称： 南通市经济技术开发区第二实验小学</div>
					<div style="margin-top: 50px;">编号： z22</div>
					<div style="margin-top: 50px;">上架时间： 2018-01-19</div>
					<div style="margin-top: 50px;">浏览次数： 395</div>
				</el-col>
			</el-row>
			<div style="font-size: 14px;font-weight: bold;background:#f00;color: #fff;width: 100px;padding: 15px;">
				项目展示
			</div>
			<div>
				<img width="100%" src="../../assets/c3/2.jpg">
			</div>
			<div style="margin-top: 17px;">
				<img width="100%" src="../../assets/c3/3.jpg">
			</div>
			<div style="margin-top: 17px;">
				<img width="100%" src="../../assets/c3/4.jpg">
			</div>
		</div>
		<foot msg="o" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	export default {
		name: 'home',
		data() {
			return {
				list: ["建筑设计", "景观设计", "古建设计", "文物保护", "旅游规划", "PPP EPC"]
			};
		},
		components: {
			top,
			foot
		},
		mounted() {

		},
		methods: {
			handleClick(t, e) {


			}
		}
	};
</script>
<style scoped>
	.h {
		padding: 10px 60px;
		background: #eaeaea;
		font-size: 13px;
	}

	.h:hover {
		background: #ff0000 !important;
		cursor: pointer;
		color: #fff;
	}
</style>
