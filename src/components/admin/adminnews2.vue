<template>
	<div class="home" style="background: #fff;">
		<div style="padding: 20px;background: #ececec;">
			<van-row>
				<van-col span="8">
					<van-circle v-model="currentRate" :clockwise="false" size="220px" :rate="rate" :color="gradientColor" :text="news" />
				</van-col>
				<van-col span="8">
					<van-circle v-model="currentRate" :clockwise="false" size="220px" :rate="rate" :color="gradientColor2" :text="pro" />
				</van-col>
				<van-col span="8">
					<van-circle v-model="currentRate" :clockwise="false" size="220px" :rate="rate" :color="gradientColor3" text="图片总数0" />
				</van-col>
			</van-row>
		</div>

	</div>
</template>

<script>
	import Editor from "@/components/Editor";
	import upload from "@/components/upload";
	import axios from "axios";
	import $ from "jquery"
	export default {
		name: 'home',
		data() {
			return {
				currentRate: 0,
				gradientColor: {
					'0%': '#3fecff',
					'100%': '#6149f6',
				},
				gradientColor2: {
					'0%': '#ffb000',
					'100%': '#00f6bb',
				},
				gradientColor3: {
					'0%': '#ff8710',
					'100%': '#ff001c',
				},
				rate: 50,
				news:"新闻总数",
				pro:"项目总数",
			}
		},
		mounted() {
			//去获取新闻总数
			let self = this
			
			axios
				.post(self.src + "/build/countnews")
				.then(function(res) {
					
					self.news="新闻总数"+res.data
				})
				.catch(function(error) {
					alert(error);
				});

			//去获取项目总数
			
			axios
				.post(self.src + "/build/countpro")
				.then(function(res) {
					self.pro="项目总数"+res.data
				})
				.catch(function(error) {
					alert(error);
				});

		},
		methods: {

		},
		components: {
			Editor,
			upload

		}
	};
</script>
<style scoped>
	/* .w-e-text-container{
	    height: 50vh !important;
	} */
</style>
