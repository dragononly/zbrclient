<template>
	<div style="clear: both;padding-top: 0px;padding-right: 70px;width: 60%;margin: auto;">
		<div style="font-size: 23px;font-weight: 400;">公司地址</div>
		<div style="margin-top: -10px;"><img width="80px" src="../../assets/home/st1.png"></div>
		<div style="width: 100%;margin-left: 3px;margin-top: 60px;height: 200px;">
			<div style="border-right:1px solid #c4c9c9;width: 33%;float: left;color: #4f4f4f;">
				<div><i style="font-size: 40px;" class="el-icon-location-information"></i></div>
				<div style="margin-top: 20px;">公司地址</div>
				<div style="font-size: 12px;margin-top: 10px;width: 100%;overflow: hidden;">{{cpaddr}}</div>
			</div>
			<div style="border-right:1px solid #c4c9c9;width: 33%;float: left;color: #4f4f4f;">
				<div><i style="font-size: 40px;" class="el-icon-phone-outline"></i></div>
				<div style="margin-top: 20px;">联系电话</div>
				<div style="font-size: 12px;margin-top: 10px;">{{cpphone}}</div>
			</div>
			<div style="width: 33%;float: left;color: #4f4f4f;">
				<div><i style="font-size: 40px;" class="el-icon-box"></i></div>
				<div style="margin-top: 20px;">电子邮箱</div>
				<div style="font-size: 12px;margin-top: 10px;">{{cpemail}}</div>
			</div>
			<div style="padding-top:170px;height: 600px;">
				<el-row>
					<el-col :md="8">
						<div style="width: 100%;position: relative;text-align: left;font-size: 12px;color: #6f6f6f;height: 320px;">
							<span style="color: #fff;">11</span>
							<div style="position: absolute;bottom: 0px;">
								<div style="font-size:16px;">交通指引</div>
								<div style="margin-top: 10px;"><i class="el-icon-s-promotion"></i>公交路线</div>
								<div style="margin-top: 5px;">{{cpbus}}</div>
								<div style="margin-top: 5px;"><i class="el-icon-s-promotion"></i>出租车/自驾</div>
								<div style="margin-top: 5px;">{{cpcar}}</div>
							</div>
						</div>
					</el-col>
					<el-col :md="16">
						<div style="height: 400px;overflow: hidden;">
							<iframe style="border: medium none;margin-top: -50px;" width="100%" height="600px" src="http://any.moono.vip:2000/map/zbr.html"></iframe>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
		<div></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cpaddr: sessionStorage.cpaddr,
				cpphone: sessionStorage.cpphone,
				cpemail: sessionStorage.cpemail,
				cpbus: sessionStorage.cpbus,
				cpcar: sessionStorage.cpcar,
			}
		},
		mounted() {
			let self = this;
			self.njia();
		},
		methods: {
			njia() {
				let self = this;
				self.time = setInterval(function() {
					if (self.n >= -1100) {
						self.n--;
					} else {
						self.n = 0;
					}
					try {
						self.$refs.tet.style.marginLeft = self.n + "px";
					} catch (e) {
						//TODO handle the exception
					}
				}, 10);
			},
			mou() {
				let self = this;
				clearInterval(self.time);
			},
			moul() {
				let self = this;
				self.njia();
			},
		}
	}
</script>


<style scoped="scoped">
	.imghff2 {
		padding: 0px;
	}

	.imghff2:hover {
		padding: 0px;
		float: left;
		animation: mymove6 0.6s forwards;
	}

	@keyframes mymove6 {
		from {
			padding-top: 0px;
		}

		to {
			margin-top: -10px;
			margin-bottom: 20px;
		}
	}

	@keyframes mymove2 {
		from {}

		to {
			width: 450px;
			margin-left: -60px;
			margin-top: -15px;
			height: 220px;
		}
	}



	.imgh2 {
		float: left;
		width: 425px;
		height: 200px;
		margin-left: -40px;
		transform: skewX(25deg);
	}

	.imgh2:hover {
		animation: mymove2 0.6s forwards;
	}


	@keyframes mymove11 {
		from {
			padding-top: 0px;
		}

		to {
			height: 190px;
			width: 345px;
		}
	}

	.imghf2 {
		margin-right: 0px;
		margin-left: 5px;
		float: left;
		padding-top: 0px;
		border-radius: 10px;
		overflow: hidden;
		transform: skewX(-25deg);
		position: relative;
		width: 325px;
		height: 170px;

	}

	.imghf2:hover {
		animation: mymove11 0.6s forwards;
	}
</style>
