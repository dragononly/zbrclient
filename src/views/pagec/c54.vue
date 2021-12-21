<template>
	<div class="home">

		<top msg="false" style="position: relative;z-index: 3;" />
		<div class="hidden-xs-only">
			<div
				style="position: relative;z-index: 1;height: 350px;font-size: 15px;color: #fff;background: url('https://wx.moono.vip:8999/mynumber1/zbrstatic/banner.jpeg');">
				<div style="line-height: 350px;color: #fff;font-size: 40px;padding-top:120px;">News &nbsp; - &nbsp;新闻
				</div>
			</div>

			<div style="width: 70%;margin: auto;margin-top: 100px;">
				<el-row>
					<el-col v-for="(a,b) in urlsnow" :key="b" :md="8" style="height: 400px;">
						<router-link :to="'m2?'+a._id">
							<div style="padding: 10px;">
								<div style="width: 100%;overflow: hidden;">
									<img width="360px" height="240px" :src="a.newsimg">
								</div>
							</div>
							<div
								style=" white-space:nowrap;overflow:hidden;text-overflow:ellipsis;;font-size: 16px;text-align: left;margin-top: 10px;">
								{{a.news}}
							</div>
							<div
								style=" display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;;font-size: 12px;color: #A0A0A0;text-align: left;margin-top: 20px;">
								{{a.zhaiyao}}
							</div>
						</router-link>
					</el-col>

				</el-row>
				<van-button @click="addimg()" color="#636465">了解更多+</van-button>
			</div>
		</div>
		
		
		<div class="hidden-md-and-up">
			<div
				style="position: relative;z-index: 1;height: 120px;font-size: 15px;color: #fff;background: url('https://wx.moono.vip:8999/mynumber1/zbrstatic/banner.jpeg');">
				<div style="line-height: 120px;color: #fff;font-size: 24px;padding-top:0px;">News &nbsp; - &nbsp;新闻
				</div>
			</div>
		
			<div style="width: 100%;margin: auto;margin-top: 10px;">
				<el-row>
					<el-col v-for="(a,b) in urlsnow" :key="b" :xs="12" style="height: 210px;">
						<router-link :to="'m2?'+a._id">
							<div style="padding: 10px;">
								<div style="width: 100%;overflow: hidden;">
									<img width="100%" height="130px" :src="a.newsimg">
								</div>
							</div>
							<div
								style=" white-space:nowrap;overflow:hidden;text-overflow:ellipsis;;font-size: 16px;text-align: left;">
								{{a.news}}
							</div>
							<div
								style=" display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;;font-size: 12px;color: #A0A0A0;text-align: left;padding-left: 10px;">
								{{a.zhaiyao}}
							</div>
						</router-link>
					</el-col>
				</el-row>
				<van-button @click="addimg()" color="#636465">了解更多+</van-button>
			</div>
		</div>
		<!-- 联系我们 -->
		<div style="margin-top: 70px;">
			<contact />
		</div>

		<foot msg="o" />
	</div>
</template>

<script>
	import axios from "axios";
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	import contact from "@/components/home/contact.vue";
	export default {
		name: 'home',
		data() {
			return {
				arr: "",
				urlsnow: [],
				n: 1,
			}
		},
		components: {
			top,
			foot,
			contact
		},
		mounted() {
			this.getnews()
			//------------------------------------结束线---------------------------------------------
		},
		methods: {
			addimg() {
				let self = this
				self.n++
				self.urlsnow = []
				for (let i = 0; i < 4 * self.n; i++) {
					if (self.arr[i]) {
						self.urlsnow.push(self.arr[i])
					}
				}
			},
			getnews() {
				let self = this
				axios
					.get(self.src + "/build/getnews")
					.then(function(res) {

						self.arr = res.data
						if (self.arr.length >= 6) {
							for (let i = 0; i < 6; i++) {
								self.urlsnow.push(self.arr[i])
							}
						} else {
							for (let i = 0; i < self.arr.length; i++) {
								self.urlsnow.push(self.arr[i])

							}

						}




					})
					.catch(function(error) {
						alert(error);
					});
			},
		}
	};
</script>
<style scoped>
	.hov1:hover {
		cursor: pointer;
	}
</style>
