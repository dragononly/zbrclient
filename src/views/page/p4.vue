<template>
	<div class="home">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<top msg="We" style="position: relative;z-index: 3;"/>
		
		<foot msg="o" />
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
	}
};
</script>
<style scoped>
.home {
	background: #fff;
}
</style>
