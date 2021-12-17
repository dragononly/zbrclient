<template>
	<div>
		<div class="hidden-xs-only" style="clear: both;padding-top: 100px;padding-right: 70px;width:100%;margin: auto;">
			<div style="font-size: 23px;font-weight: 400;">历史沿革</div>
			<div style="margin-top: -10px;"><img width="80px" src="../../assets/home/st1.png"></div>
			<div style="width: 4479px;height: 620px;margin: auto;margin-top: 20px;text-align: left;position: relative;">
				<img draggable="false" @mousemove="yidong" @mouseup="anqi" @mousedown="anxia" id="imgt"
					src="../../assets/all/拖动图片长图.jpeg" alt="">
			</div>
		</div>
		<div class="hidden-md-and-up" style="clear: both;padding-top: 20px;width:100%;margin: auto;">
			<div style="font-size:14px;font-weight: 400;">历史沿革</div>
			<div style="margin-top: 0px;"><img width="80px" src="../../assets/home/st1.png"></div>
			<div style="width: 100%;height: 420px;margin: auto;margin-top: 20px;text-align: left;position: relative;">
				<img style="height: 400px;margin-left: -20px;" id="imgt"
					src="../../assets/all/拖动图片长图.jpeg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
				offt: 1,
				odiv: "",
				disX: "",
				time: "",
				index: "0",
				n: 0,
			}
		},
		mounted() {
			let self = this;

			axios
				.get(self.src + "/build/getbasics")
				.then(function(res) {
					sessionStorage.abouttitle = res.data.abouttitle
					sessionStorage.aboutcontent1 = res.data.aboutcontent1
					sessionStorage.aboutcontent2 = res.data.aboutcontent1
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
					sessionStorage.ctcpemail = res.data.ctcpemail
					sessionStorage.bqcpname = res.data.bqcpname
					sessionStorage.icp = res.data.icp
				})
				.catch(function(error) {
					alert(error);
				});
		},
		methods: {

			anqi(e) {
				this.offt = 1
			},
			yidong(e) {
				let self = this
				if (self.offt == 1) {
					return
				}
				let left = e.clientX - self.disX;
				if (left >= 10 || left <= -600) {} else {
					//移动当前元素
					self.odiv.style.left = left + 'px';
				}

			},
			anxia(e) {
				let self = this
				self.offt = 0
				self.odiv = e.target; //获取目标元素
				//算出鼠标相对元素的位置
				self.disX = e.clientX - self.odiv.offsetLeft;
			},
		}
	}
</script>

<style scoped="scoped">
	#imgt {
		position: absolute;
		height: 600px;
		margin-left: -260px;
	}

	#imgt:hover {
		cursor: pointer;
	}
</style>
