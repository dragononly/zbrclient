<template>
	<div class="home" >
		<div v-if="show88" style="background:#092628;width: 300px;margin: auto;padding: 20px;">
		<el-input v-model="input" placeholder="请输入密码"></el-input>
		<van-button @click="loginactive2()" style="margin-top: 10px;" type="primary">登陆</van-button>
		</div>
		
		<div v-if="show99">
			<el-row>
				<el-col :span="4">
					<van-collapse v-model="activeNames">
						<van-collapse-item name="1">
							<template #title>
								<div>
									<van-icon style="float: left;" size="30" name="wap-home-o" /><span style="font-size: 20px;line-height: 30px;">首页设计</span></div>
							</template>
							<van-button plain type="primary" @click="show('首页轮播')" block>首页轮播</van-button>
							<van-button plain type="primary" @click="show('代表项目')" block>代表项目</van-button>
						</van-collapse-item>
					</van-collapse>

					<van-collapse v-model="activeNames">
						<van-collapse-item name="3">
							<template #title>
								<div>
									<van-icon style="float: left;" size="30" name="fire-o" /><span style="font-size: 20px;line-height: 30px;">新闻管理</span></div>
							</template>
							<van-button plain type="primary" @click="show('新闻条目')" block>新闻条目</van-button>
							<van-button plain type="primary" @click="show('新闻统计')" block>新闻统计</van-button>
						</van-collapse-item>
					</van-collapse>
					<van-collapse v-model="activeNames">
						<van-collapse-item name="4">
							<template #title>
								<div>
									<van-icon style="float: left;" size="30" name="hotel-o" /><span style="font-size: 20px;line-height: 30px;">项目设置</span></div>
							</template>
							<van-button plain type="primary" @click="show('二级页面设计')" block>二级页面设计</van-button>
							<van-button plain type="primary" @click="show('仿古铜建筑')" block>仿古铜建筑</van-button>
							<van-button plain type="primary" @click="show('现代铜建筑')" block>现代铜建筑</van-button>
							<van-button plain type="primary" @click="show('大师艺术')" block>大师艺术</van-button>
							<van-button plain type="primary" @click="show('产品中心')" block>产品中心</van-button>
						</van-collapse-item>
					</van-collapse>

					<van-collapse v-model="activeNames">
						<van-collapse-item name="5">
							<template #title>
								<div>
									<van-icon style="float: left;" size="30" name="setting-o" /><span style="font-size: 20px;line-height: 30px;">系统设置</span></div>
							</template>

							<van-button plain type="primary" @click="show('基础设置')" block>基础设置</van-button>

						</van-collapse-item>
					</van-collapse>


				</el-col>
				<el-col :span="20">
					<!-- 首页设计 -->
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">首页轮播</div>
						<adminpro3 />
					</div>
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">代表项目</div>
						<adminpro4 />
					</div>

					<!-- 新闻管理 -->
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">新闻条目</div>
						<adminnews />
					</div>
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">新闻统计</div>
						<adminnews2 />
					</div>

					<!-- 项目设置 -->
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">二级页面设计</div>
						<adminproject />
					</div>

					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">仿古铜建筑</div>
						<adminpro01 />
					</div>
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">现代铜建筑</div>
						<adminpro02 />
					</div>
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">大师艺术</div>
						<adminpro03 />
					</div>
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">产品中心</div>
						<adminpro04 />
					</div>
					<!-- 设置 -->
					<div class="nowshow">
						<div class="nameval" style="padding: 10px;">基础设置</div>
						<adminhome />
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import adminhome from "@/components/admin/adminhome.vue";
	import adminnews from "@/components/admin/adminnews.vue";
	import adminnews2 from "@/components/admin/adminnews2.vue";
	import adminproject from "@/components/admin/adminproject.vue";
	import adminpro01 from "@/components/admin/adminpro01.vue";
	import adminpro02 from "@/components/admin/adminpro02.vue";
	import adminpro03 from "@/components/admin/adminpro03.vue";
	import adminpro04 from "@/components/admin/adminpro04.vue";
	import adminpro3 from "@/components/admin/adminpro3.vue";
	import adminpro4 from "@/components/admin/adminpro4.vue";
	import {
		Toast
	} from 'vant';
	import $ from 'jquery'
	export default {
		name: "admin",
		data() {
			return {
				activeNames: ['1', '2', '3', '4', '5'],
				show99: false,
				input: "",
				show88:true,
				loginactive:false
			}
		},

		mounted() {
			let self=this
			if (sessionStorage.nowshowo) {
				this.show(sessionStorage.nowshowo)
			} else {
				sessionStorage.nowshowo="首页轮播"
				this.show(sessionStorage.nowshowo)
			}
			if(sessionStorage.loginactive=="true"){
				this.show88=false
				this.show99=true
				setTimeout(function(){
					self.show(sessionStorage.nowshowo)
				},10)
				
			}else{
				this.show88=true
				this.show99=false
				
			}

		},
		methods: {
			loginactive2(){
				let self=this
				if(this.input=="2wsx3edc"){
					this.show88=false
					this.show99=true
					setTimeout(function(){
						self.show("首页轮播")
					},10)
					sessionStorage.loginactive=true
				}
			},
			show(name) {
				//1显示之前先归零
				$('.nowshow').hide()
				//2显示点击的元素
				//2.1设置下标
				let index = 0
				//2.2遍历元素，当点击名和遍历名相同时，显示元素
				$('.nowshow .nameval').each(function() {
					if (name == $(this).text()) {
						$('.nowshow').eq(index).show()
						sessionStorage.nowshowo = name
					}
					index++
				})
			}

		},
		components: {
			adminhome,
			adminnews,
			adminnews2,
			adminproject,
			adminpro01,
			adminpro02,
			adminpro03,
			adminpro04,
			adminpro3,
			adminpro4,

		},
	};
</script>
