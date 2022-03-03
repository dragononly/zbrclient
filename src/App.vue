<template>
	<div id="app" style="overflow-x: hidden;">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
	
		<keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<style>
	body{
		overflow-x: hidden;
	}
	#app {
		text-align: center;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}

	* {
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: #2C3E50;
	}
</style>
<script>
	 export default {
	      name: "index",
	      data() {
	        return {
	          indexTop: 0,  // 滚动条高度存储
	        }
	      },
		  // mode: 'history',
		  //   scrollBehavior (to, from, savedPosition) {
		  //     if (savedPosition) {
		  //       return savedPosition
		  //     } else {
		  //       return { x: 0, y: 0 }
		  //     }
		  //   }
	      mounted() {
	      },
	      methods: {
	      },
	      
	    }
	
</script>
