<template>
	<div class="home">

		<top msg="false" style="position: relative;z-index: 3;" />

        <div class="hidden-xs-only" style="position: relative;z-index: 1;">
			<img width="100%" src="http://aliyun.moono.vip/cloud/zbr/二级页面/文化传承/文化传承.jpg" alt="">
		</div>
		<div class="hidden-md-and-up" style="position: relative;z-index: 1;">
			<img width="120%" style="margin-left: -40px;"  src="http://aliyun.moono.vip/cloud/zbr/二级页面/文化传承/文化传承.jpg" alt="">
		</div>
	
		<!-- 联系我们 -->
		<div style="margin-top: -7px;">
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
