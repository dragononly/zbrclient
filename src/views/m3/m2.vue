<template>
	<div class="home">

		<top msg="false" style="position: relative;z-index: 3;" />
		<div class="hidden-xs-only" style="position: relative;z-index: 1;">


			<div style="height: 350px;font-size: 15px;color: #fff;background: url('https://wx.moono.vip:8999/mynumber1/zbrstatic/banner.jpeg');">
				<div style="line-height: 350px;color: #fff;font-size: 40px;padding-top:120px;">News &nbsp; - &nbsp;新闻</div>
			</div>

			<div style="z-index: 3;left: 0;right: 0;margin: auto;top:450px;background: #fff;width: 80%;">
				<div style="text-align: left;padding: 40px;">
					<el-row :gutter="30">
						<el-col :md="16">
							<div style="font-size: 25px;color: #414041;">{{cabdata.news}}</div>
							<div style="border-bottom:1px solid #BCBEC2;text-align: right;font-size: 12px;color: #BCBEC2;padding: 3px 0;">
								{{cabdata.date}}
							</div>

							<div style="font-size: 14px;letter-spacing: 1px;text-align: center;color: #4d4c4c;">
								<div v-html="cabdata.newscontent"></div>
							</div>


						</el-col>
						<el-col :md="8" style="padding: 20px;padding-top: 0;font-size: 12px;">
							<div style="background: #333334;padding: 20px;color: #fff;font-size: 20px;font-weight: bold;">近期新闻</div>
							<div style="padding: 30px;background: #F0F0F1;">
								<div v-for="(a,b) in arr" :key="b">
									<div style="color: #C0C1C3;font-size: 12px;">{{a.date.split("T")[0]}}</div>
									<router-link @click.native="searchGainNews()" :to="'m2?'+a._id">
										<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size: 14px;border-bottom:1px solid  #C0C1C3;padding: 10px 0;">{{a.news}}</div>
									</router-link>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		
		<div class="hidden-md-and-up" style="position: relative;z-index: 1;">
		
		
			<div style="height: 140px;font-size: 15px;color: #fff;background: url('https://wx.moono.vip:8999/mynumber1/zbrstatic/banner.jpeg');">
				<div style="line-height: 140px;color: #fff;font-size: 24px;">News &nbsp; - &nbsp;新闻</div>
			</div>
		
			<div style="z-index: 3;left: 0;right: 0;margin: auto;top:450px;background: #fff;width: 100%;">
				<div style="text-align: left;padding: 40px;">
					<el-row :gutter="30">
						<el-col :xs="24">
							<div style="font-size: 25px;color: #414041;">{{cabdata.news}}</div>
							<div style="border-bottom:1px solid #BCBEC2;text-align: right;font-size: 12px;color: #BCBEC2;padding: 3px 0;">
								{{cabdata.date}}
							</div>
		
							<div style="font-size: 14px;letter-spacing: 1px;text-align: left;color: #4d4c4c;">
								<div v-html="cabdata.newscontent"></div>
							</div>
		
		
						</el-col>
						<el-col :xs="24" style="padding: 20px;padding-top: 0;font-size: 12px;">
							<div style="background: #333334;padding: 20px;color: #fff;font-size: 20px;font-weight: bold;">近期新闻</div>
							<div style="padding: 10px;background: #F0F0F1;">
								<div v-for="(a,b) in arr" :key="b">
									
									<router-link @click.native="searchGainNews()" :to="'m2?'+a._id">
										<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size: 14px;padding: 10px 0px 0px 0px;">{{a.news}}</div>
									</router-link>
									<div style="padding-left: 5px;color: #C0C1C3;font-size: 12px;border-bottom:1px solid  #C0C1C3;">{{a.date.split("T")[0]}}</div>
								</div>
							</div>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		
		
		<div>
			<foot style="clear: both;position: relative;" msg="o" />
		</div>
	</div>


</template>

<script>
	// @ is an alias to /src
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	import axios from "axios";
	import moment from "moment";
	import $ from "jquery"
	export default {
		name: 'home',
		components: {
			top,
			foot
		},
		data() {
			return {
				cabdata: "",
				arr: ""
			}
		},
		mounted() {
			//获取内容
			this.searchGainNews()
			//右边的新闻
			this.getnews()
			
			
			
			

			//------------------------------------结束线---------------------------------------------
		},
		methods: {
			getnews() {
				let self = this
				axios
					.get(self.src + "/build/getnews")
					.then(function(res) {

						self.arr = res.data
						
					})
					.catch(function(error) {
						alert(error);
					});
			},
			searchGainNews() {

				let x = Object.keys(this.$route.query)[0]
				let self = this

				let data = JSON.stringify({
					id: x,
				});

				axios
					.get(self.src + "/build/showsearch", {
						params: {
							data: data,
						},
					})
					.then(function(res) {

						self.cabdata = res.data
						moment.locale("zh-cn");
						self.cabdata.date = moment(self.cabdata.date).format('LL');
                                   
                           //所有图片居中
                           $(function(){
                           	let el=$('.home img').parent().css('text-align','center')
                                $('.home img').parent().css('display','block')
                           })
					})
					.catch(function(error) {
						alert(error);
					});
			},
		}
	};
</script>

<style scoped>
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}


	

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	/deep/ .el-tabs__item {
		width: 200px;
		text-align: left !important;
	}

	/deep/ .is-active {
		color: #fff;
		background: #d2222a;
	}

	/deep/ .is-active:hover {
		color: #fff !important;
	}

	/deep/ .is-left:hover {
		color: #000000;
	}
</style>
