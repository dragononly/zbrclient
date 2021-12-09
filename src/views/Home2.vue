<template>
	<div class="home">

		<!-- 头部 -->
		<div>
			<div style="position: relative;z-index: 3;">
				<top style="position: relative;z-index: 4;" />
			</div>
			<div style="position: relative;z-index: 1;">
				<carousel style="position: relative;z-index: 1;" />
			</div>
		</div>
		<div class="hidden-md-and-up" style="margin: auto;">
		
			<div>
				<about />
			</div>
		
			
			<div style="margin-left: -600px;">
				<delegate />
			</div>
		
			
			<div >
				<news />
			</div>
			<div style="width: 100%;margin: auto;">
				<mainwork />
			</div>
		</div>
		<div class="hidden-xs-only" style="margin: auto;">
			<!-- 关于我们 -->
			<div style="width: 875px;margin: auto;">
				<about />
			</div>

			<!-- 代表项目 -->
			<div style="margin-left: 0px;margin: auto;">
				<delegate />
			</div>

			<!-- 新闻活动 -->
			<div>
			<div :style="{backgroundImage: 'url(' + img1 + ')', backgroundSize:'100%'}"
			style="height: 620px;width: 100%;background-size: 100%;z-index: 100;">
			<div style="width: 875px;margin: auto;">
				<news />
			</div>
				
			</div>
			</div>
			<div style="width: 875px;margin: auto;">
				<mainwork />
			</div>
		</div>
		<!-- 业务范围 -->
		<!-- <div>
			<business />
		</div> -->


		<!-- 公司地址 -->
		<!-- <div>
			<address2 />
		</div> -->

		<!-- 历史沿革 -->
		<div style="width: 875px;margin: auto;">
			<history />
		</div style="width: 875px;margin: auto;">

		<!-- 联系我们 -->
		<div>
			<contact />
		</div>

		<foot />

	</div>
</template>

<script>
	import axios from "axios";
	import top from "@/components/top.vue";
	import foot from "@/components/foot.vue";
	import carousel from "@/components/home/carousel.vue";
	import about from "@/components/home/about.vue";
	import delegate from "@/components/home/delegate.vue";
	import news from "@/components/home/news.vue";
	import mainwork from "@/components/home/mainwork.vue";
	import business from "@/components/home/business.vue";
	import address2 from "@/components/home/address2.vue";
	import history from "@/components/home/history.vue";
	import contact from "@/components/home/contact.vue";
	import 'element-ui/lib/theme-chalk/display.css';
	import img1 from "@/assets/newbg.png"
	export default {
		name: "home",
		data() {
			return {
				abouttitle: "",
				aboutcontent1: "",
				aboutcontent2: "",
				cpaddr: "",
				cpphone: "",
				cpemail: "",
				cpbus: "",
				cpcar: "",
				cttitle: "",
				ctkouhao: "",
				ctbowuguan: "",
				ctcpaddr: "",
				ctcpphone: "",
				ctcpemail: "",
				bqcpname: "",
				icp: "",
				img1:img1,
			}
		},
		beforeRouteLeave(to, from, next) {
			let position = window.scrollY //记录离开页面的位置
			if (position == null) position = 0
			this.$store.commit('changeRecruitScrollY', position) //离开路由时把位置存起来
			next()
		},
		watch: {
			'$route'(to, from) {
				
					let recruitScrollY = this.$store.state.recruitScrollY
					window.scroll(0, recruitScrollY)
				
			}
		},

		mounted() {
			let self = this

			axios
				.get(self.src + "/build/getbasics")
				.then(function(res) {
					sessionStorage.abouttitle = res.data.abouttitle
					sessionStorage.aboutcontent1 = res.data.aboutcontent1
					sessionStorage.aboutcontent2 = res.data.aboutcontent2
					sessionStorage.cpaddr = res.data.cpaddr
					sessionStorage.cpphone = res.data.cpphone
					sessionStorage.cpemail = res.data.cpemail
					sessionStorage.cpbus = res.data.cpbus
					sessionStorage.cpcar = res.data.cpcar
					sessionStorage.cttitle = res.data.cttitle
					sessionStorage.ctkouhao = res.data.ctkouhao
					sessionStorage.ctbowuguan = res.data.ctbowuguan
					sessionStorage.ctcpaddr = res.data.ctcpaddr
					sessionStorage.ctcpphone = res.data.ctcpphone
					sessionStorage.ctcpphoneme = res.data.ctcpphoneme
					sessionStorage.ctcpemail = res.data.ctcpemail
					sessionStorage.bqcpname = res.data.bqcpname
					sessionStorage.icp = res.data.icp

				})
				.catch(function(error) {
					alert(error);
				});
		},
		beforeCreate() {

		},
		components: {
			top,
			foot,
			carousel,
			about,
			delegate,
			news,
			mainwork,
			business,
			address2,
			history,
			contact
		},
	};
</script>
