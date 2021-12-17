<template>
	<div class="max">
	<!-- 	<div style="line-height:0px;">
	
				<el-carousel style="overflow: hidden;" :interval="5000" arrow="always" >
					<el-carousel-item v-for="(a,b) in list" :key="b">
						<router-link :to="'m1?'+a._id">
						<img style="width: 100%;height: 100%;" :src="a.newsimg">
						</router-link>
					</el-carousel-item>
				</el-carousel>
			
		</div> -->
		<div>
			<van-swipe :autoplay="3000" >
			  <van-swipe-item v-for="(a, b) in list" :key="b">
				  <router-link :to="'m1?'+a._id">
			    <img style="width: 100%;" :src="a.newsimg" />
				</router-link>
			  </van-swipe-item>
			</van-swipe>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'top',
		data() {
			return {
				list: [{
						img: '../../assets/all/图片1.jpeg',
						src: '/'
					},
					{
						img: '../../assets/all/图片2.jpeg',
						src: '/p1'
					},
				],
			};
		},
		mounted() {
			//去获取当前页面的目录
			let self = this
			self.getnews()

		},
		methods: {
			getnews() {
				let self = this
				let data = {}
				data = {
					"name": "首页轮播"
				}
				axios
					.post(self.src + "/build/getnews3", data)
					.then(function(res) {
						self.list=res.data
					
					})
					.catch(function(error) {
						alert(error);
					});
			}
		}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/deep/ .el-carousel__arrow {
		margin-top: 0px;
	}

	/deep/ .el-carousel__indicators {
		line-height: 0px;
	}
	/* /deep/  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */
</style>
