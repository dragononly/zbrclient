<template>
	<div class="home">

		<top msg="false" style="position: relative;z-index: 3;"/>
		<div style="position: relative;height: 1400px;z-index: 1;">
			

			<div style="height: 200px;position: absolute;z-index: 3;left: 0;right: 0;margin: auto;background: #fff;width: 80%;">
				<div style="padding-top: 20px;padding-left: 40px;">
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item><a href="/">业务</a></el-breadcrumb-item>
					</el-breadcrumb>、
				</div>

				<div style="text-align: left;font-weight: 200;">
					<div style="padding: 15px 0 0 15px;font-size: 28px;">{{val}}</div>
					<div style="margin-top: 5px;padding: 0px 0 15px 15px;font-size: 26px;font-weight: 100 !important;">{{valc}}</div>
					<el-tabs :tab-position="tabPosition" @tab-click="handleClick" style="font-size: 14px;letter-spacing:2px;">
						<el-tab-pane label="咨询">
							<div style="padding: 0px 0 0 30px;">
								TJAD自1958年成立以来，始终专注建筑设计主业，从自身的核心技术优势出发，致力于向社会提供高品质的设计服务。TJAD的业务范围涵盖广泛的行业与不同的专业领域，涉及建筑行业、公路行业、市政行业、风景园林、环境污染防治、文物保护等领域的咨询、工程设计、技术支持、项目管理以及岩土工程、地质勘探等，是目前国内资质涵盖面最广的设计咨询公司之一。
							</div>
							<div style="margin-top: 50px;padding:0 0 30px 50px;">

								<ul>
									<li>市场调研报告·投资机会研究</li>
									<li>前期策划·功能需求分析·设计任务书</li>
									<li>项目建议书·立项报告</li>
									<li>可行性研究报告·项目申请报告·资金申请报告</li>
									<li>评估咨询·后评估咨询</li>
									<li>规划咨询</li>
									<li>基地选址研究</li>
									<li>环境评估</li>
									<li>交通分析</li>
									<li>地铁保护区工程咨询</li>
									<li>施工图审查</li>
									<li>施工图设计复核</li>
								</ul>


								<ul style="margin-top: 30px;">
									<li>Marketing Research Report·Study of Investment Opportunities</li>
									<li>Prophase Planning·Function Analysis ·Project Description of Design</li>
									<li>Projects Proposal·Project Justification Report</li>
									<li>Feasibility Study Report·Project Application Report·Fund Application Report</li>
									<li>Assessment Consulting·Postoccupancy Assessment Consulting</li>
									<li>Urban Planning Consulting</li>
									<li>Site Selection Research</li>
									<li>Environment Assessment</li>
									<li>Transportation Analysis</li>
									<li>Engineering Consulting of Subway Reserved Zone</li>
									<li>Working Drawing Examination</li>
									<li>Design &amp; Double-check of Working Drawing</li>
								</ul>


							</div>
						</el-tab-pane>
						<el-tab-pane label="设计">
							<div style="padding: 0px 0 0 30px;">
								<div>
									TJAD自1958年成立以来，始终专注建筑设计主业，从自身的核心技术优势出发，致力于向社会提供高品质的设计服务。TJAD的业务范围涵盖广泛的行业与不同的专业领域，涉及建筑行业、公路行业、市政行业、风景园林、环境污染防治、文物保护等领域的咨询、工程设计、技术支持、项目管理以及岩土工程、地质勘探等，是目前国内资质涵盖面最广的设计咨询公司之一。
								</div>

								<div style="padding-left: 12px;margin-top: 40px;">
									<h4>建筑行业</h4>
									<ul class="pl-20">
										<li>建筑设计、人防设计</li>
									</ul>


									<h4 style="margin-top: 20px;">市政行业</h4>
									<ul class="pl-20">
										<li>道路设计</li>
										<li>桥梁设计</li>
										<li>给水设计</li>
										<li>排水设计</li>
										<li>城镇燃气设计</li>
										<li>城市隧道设计</li>
										<li>公共交通设计</li>
										<li>轨道交通工程设计</li>
										<li>环境卫生设计</li>
									</ul>


									<h4 style="margin-top: 20px;">公路行业</h4>
									<ul class="pl-20">
										<li>公路设计</li>
										<li>特大桥梁设计</li>
										<li>交通工程设计</li>
									</ul>


									<h4 style="margin-top: 20px;">专项设计</h4>
									<ul class="pl-20">
										<li>环境工程水污染防治设计</li>
										<li>固体废物处理处置设计</li>
										<li>物理污染防治工程设计</li>
										<li>污染修复工程设计</li>
										<li>深大基坑设计</li>
										<li>地下综合体开发设计</li>
										<li>文物保护工程设计</li>
										<li>景观设计</li>
										<li>室内设计</li>
									</ul>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="技术">
							<div style="padding: 0px 0 0 30px;">
								<div>
									TJAD自1958年成立以来，始终专注建筑设计主业，从自身的核心技术优势出发，致力于向社会提供高品质的设计服务。TJAD的业务范围涵盖广泛的行业与不同的专业领域，涉及建筑行业、公路行业、市政行业、风景园林、环境污染防治、文物保护等领域的咨询、工程设计、技术支持、项目管理以及岩土工程、地质勘探等，是目前国内资质涵盖面最广的设计咨询公司之一。
								</div>

								<div style="padding-left: 12px;margin-top: 40px;">

									<ul class="pl-0">
										<li>建筑节能咨询评估</li>
										<li>绿色建筑评价咨询</li>
										<li>建筑围护结构热工分析计算</li>
										<li>建筑日照分析计算</li>
										<li>绿色建筑设计与研究</li>
										<li>复杂结构计算分析与设计咨询</li>
										<li>超高层建筑结构分析与研究</li>
										<li>超限高层建筑工程抗震设防分析与研究</li>
										<li>复杂大跨度结构的分析与研究</li>
										<li>建筑信息模型（BIM）</li>
									</ul>


									<ul class="pl-0" style="margin-top: 30px;">
										<li>Architectural Energy Conservation Consulting and Assessment</li>
										<li>Green Architecture Assessment Consulting</li>
										<li>Analysis and Calculation of Thermal Engineering in Building Envelopes</li>
										<li>Architectural Sunshine Analysis and Calculation</li>
										<li>Green Architecture Design and Reserch</li>
										<li>Complicated Structure Calculation Analysis and Design Consulting</li>
										<li>Structural Analysis and Reserch of Super High-rise Building</li>
										<li>Analysis and Reserch of Super Highrise Building Engineering Seismic Fortification</li>
										<li>Analysis and Reserch of Complicated Large-span Structure</li>
										<li>Building Information Modeling</li>
									</ul>


								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="管理">
							<div style="padding: 0px 0 0 30px;">
								<div>
									TJAD自1958年成立以来，始终专注建筑设计主业，从自身的核心技术优势出发，致力于向社会提供高品质的设计服务。TJAD的业务范围涵盖广泛的行业与不同的专业领域，涉及建筑行业、公路行业、市政行业、风景园林、环境污染防治、文物保护等领域的咨询、工程设计、技术支持、项目管理以及岩土工程、地质勘探等，是目前国内资质涵盖面最广的设计咨询公司之一。
								</div>

								<div style="padding-left: 12px;margin-top: 40px;">

									<ul class="pl-0">
										<li>设计管理</li>
										<li>设计进度管理</li>
										<li>招标代理·材料设备采购代理</li>
										<li>全过程造价管理</li>
										<li>设计优化</li>
									</ul>

									<ul class="pl-0" style="margin-top: 30px;">
										<li>Design Management</li>
										<li>Design Progress Management</li>
										<li>Bidding Agency·Materials and Equipments Purchasing Agency</li>
										<li>Whole Process Cost Management</li>
										<li>Design Optimization</li>
									</ul>

								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>







			</div>
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
				val: "咨询",
				valc: "Consulting"
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
				this.val = t.label
				let self = this
				switch (t.label) {
					case "咨询":
						self.valc = "Consulting"
						break;
					case "设计":
						self.valc = "Design"
						break;
					case "技术":
						self.valc = "Technology"
						break;
					case "管理":
						self.valc = "Management"
						break;
				}

			}
		}
	};
</script>
<style scoped>
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

	li {
		padding: 3px;
		list-style-type: circle;
	}
</style>
