<template>
	<div class="home">

		
		
		<foot msg="o"  />
	</div>
</template>

<script>
	// @ is an alias to /src
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	export default {
		name: 'home',
		components: {
			top,
			foot
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

</style>
