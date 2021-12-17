<template>
	<div style="margin: auto;padding: 30px 0;">
		<!-- <div class="hidden-xs-only" style="font-size: 23px;font-weight: 400;">关于我们</div> -->
		<!-- <div class="hidden-xs-only" style="margin-top: -10px;"><img width="80px" src="../../assets/home/st1.png"></div> -->
		<el-row>
			<el-col :md="12" :xs="24" style="padding: 20px;">
				<div class="hidden-xs-only" style="font-size: 30px;font-weight: bold;">杭州金星铜工程</div>
				<div class="hidden-md-and-up" style="font-size: 20px;font-weight: bold;">杭州金星铜工程</div>
				<div class="hidden-xs-only"  style="font-size: 12px;">GOLDSTART BRONZE ENGINEERING</div>
				<div class="hidden-md-and-up" style="font-size: 10px;">GOLDSTART BRONZE ENGINEERING</div>
				<div class="hidden-xs-only" style="padding: 10px;font-size: 19px;font-weight: 300;">
					--------------当代铜建筑开创者--------------</div>
				<div class="hidden-md-and-up" style="padding: 10px;font-size: 13px;font-weight: 300;">
					--------------当代铜建筑开创者--------------</div>


				<div class="hidden-xs-only" style=" font-weight: 400;font-size: 15px;letter-spacing: 2px;text-indent: 20px;text-align: left;">
					<div style="margin-top: 10px;">
						杭州金星铜工程系“中华老字号”企业，国家级非物质文化遗产传承基地，创始人为国家级非遗“朱府铜艺”第四代传承人、中国工艺美术大师朱炳仁，董事长和法人代表为朱军岷。杭州金星铜工程多年来一直致力于非物质文化遗产的传承与发扬，在铜建筑、铜艺术品等铜工艺领域独占鳌头。
					</div>
					<div style="margin-top: 15px;">
						“金星铜”培育了一支高精尖专业铜工程技术队伍，应用现代科技成功建成了雷峰塔、峨眉金顶、杭州香积禅寺、中台禅寺金愿铜桥及杭州G20峰会主会场等100多个传世巨作，承建/参建工程多次获建筑工程鲁班奖、全国建筑工程装饰奖、西湖杯优质工程、优秀建筑装饰工程奖等。
					</div>
				</div>
				
				<div class="hidden-md-and-up" style=" font-weight: 400;font-size: 13px;letter-spacing: 2px;text-indent: 20px;text-align: left;">
					<div style="margin-top: 10px;">
						杭州金星铜工程系“中华老字号”企业，国家级非物质文化遗产传承基地，创始人为国家级非遗“朱府铜艺”第四代传承人、中国工艺美术大师朱炳仁，董事长和法人代表为朱军岷。杭州金星铜工程多年来一直致力于非物质文化遗产的传承与发扬，在铜建筑、铜艺术品等铜工艺领域独占鳌头。
					</div>
					<div style="margin-top: 15px;">
						“金星铜”培育了一支高精尖专业铜工程技术队伍，应用现代科技成功建成了雷峰塔、峨眉金顶、杭州香积禅寺、中台禅寺金愿铜桥及杭州G20峰会主会场等100多个传世巨作，承建/参建工程多次获建筑工程鲁班奖、全国建筑工程装饰奖、西湖杯优质工程、优秀建筑装饰工程奖等。
					</div>
				</div>
			</el-col>
			<el-col :md="12" :xs="24">
				<img width="100%" style="padding-top: 30px;padding-bottom: 10px;" class="hidden-xs-only" height="428px"
					src="../../assets/about/img1.jpeg">
				<img width="87%" class="hidden-md-and-up" src="../../assets/about/img1.jpeg"
					>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {

				abouttitle: sessionStorage.abouttitle,
				aboutcontent1: sessionStorage.aboutcontent1,
				aboutcontent2: sessionStorage.aboutcontent2,
			}
		},
		mounted() {

		},
		watch: {
			abouttitle(a, b) {
				console.log(a, b)
			}

		}
	}
</script>

<style>
</style>
