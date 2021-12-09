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
			<div style="margin-top: 50px;margin-bottom: 50px;padding-left: 5px;">
				<div style="margin-bottom: 20px;margin-top: 40px;text-align: left;font-style: normal;color: #000;font-size: 24px;font-weight: bold;">建筑设计</div>
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
