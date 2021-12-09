<template>
	<div class="home">

		<top msg="false" />
		<div style="margin: auto;width: 80%;margin-top: 50px;">
			<el-tabs :tab-position="tabPosition">
				<el-tab-pane v-for="(a,b) in list" :key="b" :label="a.name">
					<div style="padding:0 0 0 40px;">
						<img width="100%" :src="a.img">
						<el-row>
							<el-col :md="12">
								<div style="margin-top: 50px;text-align: left;font-size: 20px;padding: 10px 0 10px 0px;">综合交通枢纽</div>
								<div class="tsc">在机场航站楼和综合交通枢纽建筑设计领域中，华东建筑设计研究总院专注原创、科研、设计总包服务，培养专项化核心技术优势。专项化设计团队历史最早可追溯至上世纪60年代虹桥机场T1航站楼，并以浦东机场T1、T2航站楼为新的起点，专项化设计团队应运而生，之后接连完成虹桥综合交通枢纽等重大项目，并为上海、南京、杭州等城市的10余座航站楼和综合交通枢纽提供设计服务。在其他交通建筑设计领域，包括大型通关口岸、大型城市轨道交通站等方面的设计技术和项目积累也处于国内领先地位。
									综合交通枢纽团队立足原创，不断更新发展前端、高端技术，先后设计浦东机场T2航站楼、虹桥综合交通枢纽、南京禄口机场二期工程、港珠澳大桥珠海口岸及澳门口岸、虹桥机场T1航站楼改造、浦东机场三期工程卫星厅、乌鲁木齐机场北航站区、杭州萧山机场T3航站楼等。曾先后两次荣获全国工程勘察设计最高奖项---全国优秀工程勘察设计金奖，并先后获得亚洲建筑协会建筑大奖荣誉提名奖、联合国气候大会绿色建筑大奖、行业奖一等奖等各项设计奖项数10项。团队先后设计总承包项目10余项，并以设计总承包平台整合国际优秀资源，港珠澳大桥澳门口岸更是开启了执行建筑师的境外设计总包服务模式新篇章，已具备较强的国际竞争力。同时，团队重视产学研一体化发展，累计完成50余项科研成果直接服务项目实践，并先后获得上海市科技进步奖7项，发表论文数十篇，专利近10项，并主编《建筑设计资料集》第三版“综合交通枢纽”子项，参编“航站楼”子项。
									团队曾多次获得上海市立功竞赛金杯团队、上海市立功竞赛创新团队称号，为上海乃至全国的重大工程设施建设作出了重大贡献。</div>
							</el-col>
							<el-col :md="12">
								<div style="padding:70px 0px 0px 100px">
									<img width="90%" src="../../assets/c1/2.png">
								</div>
							</el-col>
						</el-row>
						<el-row :gutter="25" style="margin-top: 20px;">
							<el-col :span="12" v-for="i in 14" style="margin-bottom: 20px;">
								<img width="100%" src="../../assets/c1/3.png" alt="">
							</el-col>
						</el-row>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
		<foot msg="o" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	export default {
		name: 'home',
		data() {
			return {
				tabPosition: 'left',
				list: [{
					name: '综合交通枢纽',
					img:require('../../assets/c1/1.png')
				}, {
					name: '超高层建筑',
					img:require('../../assets/c1/a2.png')
				}, {
					name: '商业综合体',
					img:require('../../assets/c1/a3.png')
				}, {
					name: '站城一体',
					img:require('../../assets/c1/a4.png')
				}, {
					name: '城市设计',
					img:require('../../assets/c1/a5.png')
				}, {
					name: '地下空间',
					img:require('../../assets/c1/a6.png')
				}, {
					name: '城市更新',
					img:require('../../assets/c1/a7.png')
				}, {
					name: '既有建筑改造',
					img:require('../../assets/c1/a8.png')
				}, {
					name: '历史保护',
					img:require('../../assets/c1/a9.png')
				}, {
					name: '文化与旅游',
					img:require('../../assets/c1/a10.png')
				}, {
					name: '医疗与养老',
					img:require('../../assets/c1/a11.png')
				}, {
					name: '产业园区',
					img:require('../../assets/c1/a11.png')
				}, {
					name: '办公建筑',
					img:require('../../assets/c1/a2.png')
				}, {
					name: '教育建筑',
					img:require('../../assets/c1/a2.png')
				}, {
					name: '酒店建筑',
					img:require('../../assets/c1/a2.png')
				}, {
					name: '公共艺术',
					img:require('../../assets/c1/a2.png')
				}]
			};
		},
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
		methods: {
			handleClick(t, e) {
				// this.val = t.label
				// let self = this
				// switch (t.label) {
				// 	case "咨询":
				// 		self.valc = "Consulting"
				// 		break;
				// 	case "设计":
				// 		self.valc = "Design"
				// 		break;
				// 	case "技术":
				// 		self.valc = "Technology"
				// 		break;
				// 	case "管理":
				// 		self.valc = "Management"
				// 		break;
				// }

			}
		}
	};
</script>
<style scoped>
	.tsc {
		line-height: 36px;
		font-size: 13px;
		text-align: left;
		height: 315px;
		overflow-y: scroll;
	}

	.tsc::-webkit-scrollbar {
		width: 2px;
		height: 1px;
	}

	.tsc::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: #535353;

	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	/deep/ .el-tabs__item {
		width: 120px;
		height: 45px;
		text-align: center !important;
		font-size: 13px;
		font-weight: 500;
		color: #3a3a3a !important;

	}

	/deep/ .is-active {
		color: #da3c2c !important;
		border-bottom: 2px solid #da3c2c;
	}



	/deep/ .is-left:hover {
		color: #000000;
	}

	li {
		padding: 3px;
		list-style-type: circle;
	}
</style>
