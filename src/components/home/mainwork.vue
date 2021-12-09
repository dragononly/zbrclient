<template>
	<div>
		<div style="margin: auto;padding: 30px 0;">
			<div style="font-size: 23px;font-weight: 400;">主要项目</div>
			<div style="margin-top: -10px;"><img width="100px" src="../../assets/home/st1.png"></div>
			<div class="liu hidden-xs-only" style="margin-top: 50px;position: relative;height: 700px;">
				<div style="position: absolute;" ref="aaa">
					<router-link to="p21?page=1&leixing=风景名胜">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[0].srcarr[2]">
							<div @mouseenter="css2($event)" class="dingwei">
								<div><img src="../../assets/icon2/风景名胜.png">仿古铜建筑<img src="../../assets/icon2/风景名胜.png">
								</div>
								<div>风景名胜</div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=1&leixing=寺庙建筑">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[1].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/寺庙建筑.png">仿古铜建筑<img src="../../assets/icon2/寺庙建筑.png">
								</div>
								<div>寺庙建筑</div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=1&leixing=亭台廊桥">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[2].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/亭台廊桥.png">仿古铜建筑<img src="../../assets/icon2/亭台廊桥.png">
								</div>
								<div>亭台廊桥</div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=1&leixing=室内装饰">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[3].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/室内装饰.png">仿古铜建筑<img src="../../assets/icon2/室内装饰.png">
								</div>
								<div>室内装饰</div>
							</div>
						</span>
					</router-link>
				</div>
				<div style="position: absolute;top: 165px;left: 38px;width: 100%;">
					<router-link to="p21?page=2&leixing=大型场馆">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[4].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/大型场馆.png">现代铜建筑<img src="../../assets/icon2/大型场馆.png">
								</div>
								<div>大型场馆</div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=2&leixing=酒店装饰">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[5].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/酒店装饰.png">现代铜建筑<img src="../../assets/icon2/酒店装饰.png">
								</div>
								<div>酒店装饰</div>
								<div></div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=2&leixing=精品铜门">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[6].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/精品铜门.png">现代铜建筑<img src="../../assets/icon2/精品铜门.png">
								</div>
								<div>精品铜门</div>
								<div></div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=2&leixing=铜制幕墙">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[7].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/铜制幕墙.png">现代铜建筑<img src="../../assets/icon2/铜制幕墙.png">
								</div>
								<div>铜制幕墙</div>
								<div></div>
							</div>
						</span>
					</router-link>
				</div>
				<div style="position: absolute;top: 330px;">
					<router-link to="p21?page=3&leixing=壁画艺术">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[8].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/壁画艺术.png">大师艺术<img src="../../assets/icon2/壁画艺术.png">
								</div>
								<div>壁画艺术</div>
								<div></div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=3&leixing=熔铜作品">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[9].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/熔铜作品.png">大师艺术<img src="../../assets/icon2/熔铜作品.png">
								</div>
								<div>熔铜作品</div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=3&leixing=雕塑造像">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[10].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/雕塑造像.png">大师艺术<img src="../../assets/icon2/雕塑造像.png">
								</div>
								<div>雕塑造像</div>
							</div>
						</span>
					</router-link>
					<router-link to="p21?page=3&leixing=雕塑造像">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[11].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/雕塑造像.png">大师艺术<img src="../../assets/icon2/雕塑造像.png">
								</div>
								<div>雕塑造像</div>
							</div>
						</span>
					</router-link>
				</div>
				<div style="position: absolute;top: 495px;left: 38px;width: 100%;">
					<router-link to="p21?page=4&leixing=铜瓦">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[12].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/铜瓦.png">产品中心<img src="../../assets/icon2/铜瓦.png">
								</div>
								<div>铜瓦</div>

							</div>
						</span>
					</router-link>
					<router-link to="p21?page=4&leixing=斗拱">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[13].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/斗拱.png">产品中心<img src="../../assets/icon2/斗拱.png">
								</div>
								<div>斗拱</div>

							</div>
						</span>
					</router-link>
					<router-link to="p21?page=4&leixing=砖墙柱栏">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[14].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)">
								<div><img src="../../assets/icon2/砖墙柱栏.png">产品中心<img src="../../assets/icon2/砖墙柱栏.png">
								</div>
								<div>砖墙柱栏</div>

							</div>
						</span>
					</router-link>
					<router-link to="p21?page=4&leixing=其他构件">
						<span style="position: relative;">
							<img class="img1" @mouseleave="css1l($event)" @mouseenter="css1($event)"
								:src="res[15].srcarr[2]">
							<div class="dingwei" @mouseenter="css2($event)" style="margin-top: 16px;">
								<div>产品中心</div>
								<div>其他构件</div>
								<div>
									<img style="margin-top: 2px;" src="../../assets/icon2/其他构件.png">
								</div>
							</div>
						</span>
					</router-link>

				</div>
			</div>
	
	
	<div class="liu2 hidden-md-and-up" style="margin: auto;margin-top: 20px;position: relative;height: 210px;width: 350px;">
		<div style="position: absolute;" ref="aaa">
			<router-link to="p21?page=1&leixing=风景名胜">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[0].srcarr[2]">
					<div class="dingwei2">
						<div>
							<img src="../../assets/icon2/风景名胜.png">仿古铜建筑
							<img src="../../assets/icon2/风景名胜.png">
						</div>
						<div>风景名胜</div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=1&leixing=寺庙建筑">
				<span style="position: relative;">
					<img class="img11"
						:src="res[1].srcarr[2]">
					<div class="dingwei2">
						<div><img src="../../assets/icon2/寺庙建筑.png">仿古铜建筑<img src="../../assets/icon2/寺庙建筑.png">
						</div>
						<div>寺庙建筑</div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=1&leixing=亭台廊桥">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[2].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/亭台廊桥.png">仿古铜建筑<img src="../../assets/icon2/亭台廊桥.png">
						</div>
						<div>亭台廊桥</div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=1&leixing=室内装饰">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[3].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/室内装饰.png">仿古铜建筑<img src="../../assets/icon2/室内装饰.png">
						</div>
						<div>室内装饰</div>
					</div>
				</span>
			</router-link>
		</div>
		<div style="position: absolute;top: 70px;left: 22px;width: 100%;">
			<router-link to="p21?page=2&leixing=大型场馆">
				<span style="position: relative;">
					<img class="img11"
						:src="res[4].srcarr[2]">
					<div class="dingwei2">
						<div><img src="../../assets/icon2/大型场馆.png">现代铜建筑<img src="../../assets/icon2/大型场馆.png">
						</div>
						<div>大型场馆</div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=2&leixing=酒店装饰">
				<span style="position: relative;">
					<img class="img11"
						:src="res[5].srcarr[2]">
					<div class="dingwei2">
						<div><img src="../../assets/icon2/酒店装饰.png">现代铜建筑<img src="../../assets/icon2/酒店装饰.png">
						</div>
						<div>酒店装饰</div>
						<div></div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=2&leixing=精品铜门">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[6].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/精品铜门.png">现代铜建筑<img src="../../assets/icon2/精品铜门.png">
						</div>
						<div>精品铜门</div>
						<div></div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=2&leixing=铜制幕墙">
				<span style="position: relative;">
					<img class="img11"
						:src="res[7].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/铜制幕墙.png">现代铜建筑<img src="../../assets/icon2/铜制幕墙.png">
						</div>
						<div>铜制幕墙</div>
						<div></div>
					</div>
				</span>
			</router-link>
		</div>
		<div style="position: absolute;top: 140px;">
			<router-link to="p21?page=3&leixing=壁画艺术">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[8].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/壁画艺术.png">大师艺术<img src="../../assets/icon2/壁画艺术.png">
						</div>
						<div>壁画艺术</div>
						<div></div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=3&leixing=熔铜作品">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[9].srcarr[2]">
					<div class="dingwei2">
						<div><img src="../../assets/icon2/熔铜作品.png">大师艺术<img src="../../assets/icon2/熔铜作品.png">
						</div>
						<div>熔铜作品</div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=3&leixing=雕塑造像">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[10].srcarr[2]">
					<div class="dingwei2">
						<div><img src="../../assets/icon2/雕塑造像.png">大师艺术<img src="../../assets/icon2/雕塑造像.png">
						</div>
						<div>雕塑造像</div>
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=3&leixing=雕塑造像">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[11].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/雕塑造像.png">大师艺术<img src="../../assets/icon2/雕塑造像.png">
						</div>
						<div>雕塑造像</div>
					</div>
				</span>
			</router-link>
		</div>
		<div style="position: absolute;top: 210px;left: 22px;width: 100%;">
			<router-link to="p21?page=4&leixing=铜瓦">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[12].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/铜瓦.png">产品中心<img src="../../assets/icon2/铜瓦.png">
						</div>
						<div>铜瓦</div>
	
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=4&leixing=斗拱">
				<span style="position: relative;">
					<img class="img11"
						:src="res[13].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/斗拱.png">产品中心<img src="../../assets/icon2/斗拱.png">
						</div>
						<div>斗拱</div>
	
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=4&leixing=砖墙柱栏">
				<span style="position: relative;">
					<img class="img11"
						:src="res[14].srcarr[2]">
					<div class="dingwei2" >
						<div><img src="../../assets/icon2/砖墙柱栏.png">产品中心<img src="../../assets/icon2/砖墙柱栏.png">
						</div>
						<div>砖墙柱栏</div>
	
					</div>
				</span>
			</router-link>
			<router-link to="p21?page=4&leixing=其他构件">
				<span style="position: relative;">
					<img class="img11" 
						:src="res[15].srcarr[2]">
					<div class="dingwei2"  style="margin-top: 16px;">
						<div>产品中心</div>
						<div>其他构件</div>
						<div>
							<img style="margin-top: 2px;" src="../../assets/icon2/其他构件.png">
						</div>
					</div>
				</span>
			</router-link>
	
		</div>
	</div>
		
		</div>
	
	
	</div>



</template>

<script>
	import axios from "axios";
	import $ from "jquery"
	export default {
		data() {
			return {
				img: [],
				active: "",
				myid: [],
				zhaiyao: [],
				res: [{
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					},
					{
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					}, {
						srcarr: ["", "", ""]
					},
				],
			}
		},
		mounted() {
			this.getnews()

		},
		methods: {
			css1($event) {
				$('.dingweic').addClass('dingwei')
				$('.dingweic').removeClass('dingweic')
				$('.img1c').addClass('img1')
				$('.img1c').removeClass('img1c')
				$event.currentTarget.className = "img1c"

				$event.currentTarget.nextElementSibling.className = "dingweic"
			},
			css1l($event) {
				$event.currentTarget.className = "img1"
				$event.currentTarget.nextElementSibling.className = "dingwei"
			},
			css2($event) {

				$event.currentTarget.className = "dingweic"
				$event.currentTarget.previousElementSibling.className = "img1c"
			},
			css2l($event) {
				$event.currentTarget.className = "dingwei"
				$event.currentTarget.nextElementSibling.className = "img1"
			},

			showa(i) {
				let self = this
				$('.img2').eq(i + 1).css("width", "300px")
			},
			disshowa() {
				let self = this
				$('.img2').css("width", "0px")
				$('.img2').eq(i + 1).css("width", "0px")
			},
			getnews() {
				let self = this
				axios
					.get(self.src + "/build/getmainwork")
					.then(function(res) {


						self.res = res.data
						// return
						// for (let s of res.data) {

						// 	self.img.push(s.srcarr[2])
						// 	self.myid.push(s._id)
						// 	self.zhaiyao.push(s.zhaiyao)
						// }

					})
					.catch(function(error) {
						alert(error);
					});
			},
		},
	};
</script>

<style scoped="scoped">
	.dingwei {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 10px;
		margin: auto;

		font-size: 12px;
		color: #fff;
		display: none;
	}
	.dingwei2 {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 10px;
		margin: auto;
		font-size: 12px;
		color: #fff;
		display: none;
	}

	.dingweic {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 10px;
		margin: auto;
		top: -30px;
		font-size: 12px;
		color: #fff;
		display: block;
	}

	.dingweic div:nth-child(1) {
		font-size: 20px;
		padding: 5px 0;
	}

	.dingweic div:nth-child(2) {
		font-size: 13px;
	}

	.dingweic img:nth-child(1) {
		width: 20px;
		/* margin-top: 19px; */
		margin-right: 5px;
	}

	.dingweic img:nth-child(2) {
		width: 20px;
		/* margin-top: 19px; */
		margin-left: 5px;
	}

	.dingwei div:nth-child(1) {
		font-size: 20px;
		padding: 5px 0;
	}

	.dingwei div:nth-child(2) {
		font-size: 13px;
	}

	.dingwei img:nth-child(1) {
		width: 20px;
		margin-top: 19px;
		margin-right: 5px;
	}

	.dingwei img:nth-child(2) {
		width: 20px;
		margin-top: 19px;
		margin-left: 5px;
	}

	.liu span {
		position: relative;
	}
	.liu2 span {
		position: relative;
	}

	.img1:hover {
		cursor: pointer;
	}

	.img1 {
		width: 180px;
		margin-right: 9px;
	}
	.img11 {
		width: 70px;
		margin-right: 9px;
	}

	.img1c {
		width: 180px;
		margin-right: 9px;
		filter: brightness(50%);
	}

	.img1:hover~.img2 {

		cursor: pointer;
		animation: mymove6 0.5s forwards;
	}

	.img1:hover~.d1 {
		display: block;
		left: 120px;
		position: absolute;
		animation: mymove7 0.5s forwards;
	}

	@keyframes mymove6 {
		from {}

		to {
			width: 300px;
		}
	}

	@keyframes mymove7 {
		from {}

		to {
			width: 200px;
			font-size: 12px;
			color: #fff;
			left: 120px;
			position: absolute;
		}
	}

	.d1:hover {
		cursor: pointer;
		display: block;
		animation: mymove7 1s forwards;
	}

	.d1 {
		position: absolute;
		top: -90px;
		text-align: left;
		display: none;
		width: 200px;
		color: #fff;

		z-index: 3;
		padding-left: 30px;
	}

	.img2:hover {
		cursor: pointer;
		font-size: 12px;
		color: #fff;
		animation: mymove6 1s forwards;
	}

	.img2:hover+.d1 {
		cursor: pointer;
		display: block;
		animation: mymove7 1s forwards;
	}

	.img2 {
		width: 0px;
		position: absolute;
		z-index: 3;
		left: 100px;
		cursor: pointer;
		font-size: 0;
		color: #fff;
	}
</style>
