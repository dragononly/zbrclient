<template>
	<div class="home">

		<top msg="false" style="position: relative;z-index: 3;" />

       <div class="hidden-xs-only">
       	<div
       		style="position: relative;z-index: 1;font-size: 15px;color: #fff;background: url('../../assets/all/灰色背景.jpeg') repeat no-repeat;background-size: 100%;">
       		<div style="color: #f9cd59;font-size: 40px;padding-top: 100px;">旅行社会责任，开展各类公益活动</div>
       		<div style="padding-top: 50px;">立足业务发展与服务社会，多途径多渠道地寻求</div>
       		<div style="padding-top: 15px;">经济效益与社会效益的最佳结合点。在提高经济效益的同时回馈社会，援助灾区重建和西部地区发展</div>
       		<div style="padding-top: 15px;padding-bottom: 100px;">同时，将企业优秀文化辐射社会</div>
       	</div>
       	<div style="width: 60%;margin: auto;margin-top: 70px;">
       		<el-row>
       			<el-col :md="12">
       
       				<img height="260px" width="100%" src="../../assets/all/左边.jpeg"
       					alt="">
       
       			</el-col>
       			<el-col :md="12"><img height="260px" width="100%"
       					src="../../assets/all/右边.jpeg" alt=""></el-col>
       		</el-row>
       	</div>
       </div>
       
       <div class="hidden-md-and-up">
       	<div
       		style="font-size: 11px;position: relative;z-index: 1;color: #fff;background: url('../../assets/all/灰色背景.jpeg') repeat no-repeat;background-size: 100%;">
       		<div style="color: #f9cd59;font-size: 20px;padding-top: 20px;">旅行社会责任，开展各类公益活动</div>
       		<div style="padding-top: 20px;">立足业务发展与服务社会，多途径多渠道地寻求</div>
       		<div style="padding-top: 10px;">经济效益与社会效益的最佳结合点。在提高经济效益的同时回馈社会，援助灾区重建和西部地区发展</div>
       		<div style="padding-top: 10px;padding-bottom: 40px;">同时，将企业优秀文化辐射社会</div>
       	</div>
       	<div style="width: 100%;margin: auto;margin-top: 0px;">
       		<el-row>
       			<el-col :xs="12">
       
       				<img height="140px" width="100%" src="../../assets/all/左边.jpeg"
       					alt="">
       
       			</el-col>
       			<el-col :xs="12"><img height="140px" width="100%"
       					src="../../assets/all/右边.jpeg" alt=""></el-col>
       		</el-row>
       	</div>
       </div>
	
		<!-- 联系我们 -->
		<div style="margin-top: 20px;">
			<contact />
		</div>
		<foot msg="o" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	import contact from "@/components/home/contact.vue";
	export default {
		name: 'home',
		components: {
			top,
			foot,
			contact
		},
		mounted() {
			createcode(); //需要触发的函数

			function createcode() {

			} //createcode  end
			//------------------------------------结束线---------------------------------------------
		},
		methods: {}
	};
</script>
<style scoped>
	.hov1:hover {
		cursor: pointer;
	}
</style>
