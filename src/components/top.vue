<template>
	<div class="max">
		<div class="top" style="background: #323232;padding:0  0;color: #fff;">
			<div style="padding:0 0;">
				<div class="grid-content bg-purple-light">
					<el-row style="padding:  0;">
						<el-col :md="4" :xs="24" :offset="2">
							<div class="hidden-xs-only" style="text-align: center;padding: 10px;padding-top: 33px;">
								<img width="180px" src="../assets/logo3.png">
							</div>
							<div class="hidden-md-and-up" style="text-align: center;padding-top: 15px;">
								<img width="180px" src="../assets/logo3.png">
							</div>
						</el-col>
						<el-col :md="4" :xs="6">
							<router-link to="/Home2" style="color:#fff;text-decoration: none;font-size: 16px;">
								<div style="padding:30px 0 0 0;">首页</div>
								<div class="hidden-xs-only"
									style="padding:20px 0 30px 0;font-size: 10px;color: #b4b1b6;">HOME</div>

							</router-link>
						</el-col>
						<el-col :md="4" :xs="6" style="position: relative;">
							<span class="toshow1" style="color:#fff;text-decoration: none;font-size: 16px;">
								<div style="padding:30px 0 0 0;">工程项目</div>
								<div class="hidden-xs-only"
									style="padding:20px 0 30px 0;font-size: 10px;color: #b4b1b6;">PROJECT</div>
								<div class="show1"
									style="font-size: 15px;color: #e5eaf6;position: absolute;left: 0;right: 0;margin: auto;background: #52575C;">
									<div class="myh1" style="padding:  0;">
										<router-link @click.native="toParent(1)"
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="p21?page=1">仿古铜建筑</router-link>
									</div>
									<div class="myh1" style="padding:  0;">
										<router-link @click.native="toParent(2)"
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="p21?page=2">现代铜建筑</router-link>
									</div>
									<div class="myh1" style="padding:  0;">
										<router-link @click.native="toParent(3)"
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="p21?page=3">大师艺术</router-link>
									</div>

									<div class="myh1" style="padding: 0;">
										<router-link @click.native="toParent(4)"
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="p21?page=4">产品中心</router-link>
									</div>

								</div>
							</span>
						</el-col>

						<el-col :md="4" :xs="6">
							<a href="http://www.zbrty.com/" style="color:#fff;text-decoration: none;font-size: 16px;">
								<div style="padding:30px 0 0 0;">文创</div>
								<div class="hidden-xs-only"
									style="padding:20px 0 30px 0;font-size: 10px;color: #b4b1b6;">ZBR COPPER ART</div>
							</a>
						</el-col>
						<el-col :md="4" :xs="6" style="position: relative;">
							<span class="toshow1" style="color:#fff;text-decoration: none;font-size: 16px;">
								<div style="padding:30px 0 0 0;">记录</div>
								<div class="hidden-xs-only"
									style="padding:20px 0 30px 0;font-size: 10px;color: #b4b1b6;">RECORDING</div>
								<div class="show1"
									style="font-size: 15px;color: #e5eaf6;position: absolute;left: 0;right: 0;margin: auto;background: #52575C;">
									<div class="myh1" style="padding:  0;">
										<router-link
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="c54">新闻报道</router-link>
									</div>
									<div class="myh1" style="padding:  0;">
										<router-link
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="c52">关于我们</router-link>
									</div>
									<div class="myh1" style="padding:  0;">
										<router-link
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="c52">文化传承</router-link>
									</div>

									<div class="myh1" style="padding: 0;">
										<router-link
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="c51">社会公益</router-link>
									</div>
									<div class="myh1" style="padding:  0;">
										<router-link
											style="color: #e5eaf6;display: block;height: 50px;line-height: 50px;"
											to="c53">员工生活</router-link>
									</div>
								</div>
							</span>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<div class="hidden-md-and-up" style="height: 20px;background: #323232;"></div>
	</div>


</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {
		name: 'top',
		props: ['msgVal'],
		data() {
			return {
				nowpage: sessionStorage.page
			};
		},
		methods: {

			toParent: function(a) {
				this.$emit('event1', a)
			}


		}

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.myh1:hover {
		background: #758190;
	}

	.show1 {
		display: none;
	}

	.show1:hover {
		display: block;
	}

	.toshow1:hover {
		cursor: pointer;
	}

	.toshow1:hover .show1 {
		display: block;

	}
</style>
