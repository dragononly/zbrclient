<template>
	<div class="home" style="background: #ececec;padding: 20px;">
		<el-row>
			<el-col :md="6">
				<div style="width: 200px;float: left;">
					<div>
						<div @click="show1" class="hov1">仿古铜建筑
							<img width="20px" src="../../assets/icon/传统艺术.png">
							<i style="font-size: 20px;" class="el-icon-arrow-down"></i></div>
						<div v-if="show1css">
							<div class="hov1" @click="test2(a)" @mouseover="test($event,a)" v-for="(a,b) in menua1" :key="b" style="padding: 5px;text-indent: -15px;">{{a}}</div>
						</div>
					</div>
					<div>
						<div @click="show2" class="hov1" style="margin-top: 6px;">现代铜建筑<img width="20px" src="../../assets/icon/现代建筑.png"><i
							 style="font-size: 20px;" class="el-icon-arrow-down"></i></div>
						<div v-if="show2css">
							<div class="hov1" @click="test2(a)" @mouseover="test($event,a)" v-for="(a,b) in menua2" :key="b" style="padding: 5px;text-indent: -15px;">{{a}}</div>
						</div>
					</div>
					<div>
						<div @click="show3" class="hov1" style="margin-top: 6px;"><span style="margin-right: 19px;">大师艺术</span><img width="20px"
							 src="../../assets/icon/大师艺术.png"><i style="font-size: 20px;" class="el-icon-arrow-down"></i></div>
						<div v-if="show3css">
							<div class="hov1" @click="test2(a)" @mouseover="test($event,a)" v-for="(a,b) in menua3" :key="b" style="padding: 5px;text-indent: -15px;">{{a}}</div>
						</div>
					</div>
					<div>
						<div @click="show4" class="hov1" style="margin-top: 6px;"><span style="margin-right: 19px;">产品中心</span><img width="20px"
							 src="../../assets/icon/大师艺术.png"><i style="font-size: 20px;" class="el-icon-arrow-down"></i></div>
						<div v-if="show4css">
							<div class="hov1" @click="test2(a)" @mouseover="test($event,a)" v-for="(a,b) in menua4" :key="b" style="padding: 5px;text-indent: -15px;">{{a}}</div>
						</div>
					</div>
				</div>

			</el-col>

			<el-col :md="18" style="text-align: left;">
				<div style="background: #fff;padding: 10px;">当前目录---{{nowclick}}</div>
				<div style="float: left;height: 200px;overflow: hidden;">
					<img id="myimg1" width="300px" height="200px" :src="srcarr[0]" alt="">
				</div>
				<div style="float: left;height: 200px;overflow: hidden;">
					<img id="myimg2" width="300px" height="200px" :src="srcarr[1]" alt=""></div>
				<div>
					<upload @toFatherData="sendSonData" />
				</div>
				<div>
					<van-field v-model="aboutcontent1" rows="6" autosize label="介绍" type="textarea" maxlength="280" placeholder="请输入内容"
					 show-word-limit />
				</div>
				<div style="background: #fff;margin-top: 10px;">
					<van-cell title="首页六边形图" value="首页六边形图" />
					<van-radio-group v-model="radio" style="font-size: 12px;">
						<van-radio name="1" style="float: left;">首页显示</van-radio>
						<van-radio name="2" style="float: left;">首页隐藏</van-radio>
					</van-radio-group>
					<img width="200px" id="myimg3" :src="srcarr[2]">

					<upload @toFatherData="sendSonData2" />
				</div>
				<van-button @click="save()" type="info" block="">保存</van-button>
			</el-col>
		</el-row>


		<el-dialog style="width: 41%;margin: auto;" title="新增" :before-close="handleClose" :visible.sync="dialogVisible">
			<el-select v-model="value" placeholder="请选择">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<div style="margin: auto;margin-top: 10px;width:77%;">
				<el-input v-model="input" placeholder="请输入名字"></el-input>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="subNoteName()">确 定</el-button>
			</span>
		</el-dialog>
		<div>
			<el-card class="box-card" v-show="show">
				<div class="ho1" @click="dialogVisible = true">添加项目</div>
				<div class="ho1" @click="change()">修改{{nowhover}}</div>
				<div class="ho1" @click="rmmenu()">删除{{nowhover}}</div>
				<div class="ho1" @click="clear()">刷新</div>
			</el-card>
		</div>



		<el-dialog title="" :visible.sync="dialogVisible3" width="40%">
			<div style="padding:0 20px;">
				<van-field v-model="val" label="栏目" />
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible3 = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible3 = false;changetrue();">
					确 定
				</el-button>
			</span>
		</el-dialog>
	</div>

</template>

<script>
	import Editor from "@/components/Editor";
	import axios from "axios";
	import upload from '@/components/upload.vue';
	import $ from "jquery"
	export default {
		name: 'home',
		data() {
			return {
				srcarr: [],
				radio: '1',
				namearr: "",
				val: "",
				sendSonMessage: "",
				aboutcontent1: "",
				dialogVisible3: false,
				options: [{
					value: '仿古铜建筑',
					label: '仿古铜建筑'
				}, {
					value: '现代铜建筑',
					label: '现代铜建筑'
				}, {
					value: '大师艺术',
					label: '大师艺术'
				}, {
					value: '产品中心',
					label: '产品中心'
				}],
				value: '仿古铜建筑',
				show1css: true,
				show2css: true,
				show3css: true,
				show4css: true,
				show: false,
				nowhover: "",
				off: "0",
				input: "",
				dialogVisible: false,
				dialogVisible2: false,
				menua1: [],
				menua2: [],
				menua3: [],
				menua4: [],
				startx: 0,
				starty: 0,
				nowclick: "",
				nowid: "",
				abouttitle: "",
				n: '0'
			};
		},
		mounted() {
			//去获取当前页面的目录
			let self = this
			//请求加载目录
			self.reqNoteMenu()
			// document.oncontextmenu = function(ev) {
			// 	self.show = true
			// 	let el = document.getElementsByClassName("box-card")[0]
			// 	//鼠标没有落在书本上
			// 	if (self.nowhover == "") {
			// 		var e = ev || window.event;
			// 		var x = e.clientX;
			// 		var y = e.clientY;
			// 		el.style.left = e.clientX + 'px'
			// 		el.style.top = e.clientY + 'px'
			// 	} else {
			// 		el = document.getElementsByClassName("box-card")[0]

			// 		try {
			// 			el.style.left = self.startx + 'px'
			// 			el.style.top = self.starty + 'px'
			// 		} catch (e) {
			// 			//TODO handle the exception
			// 		}
			// 	}
			// 	return false
			// }
		},
		methods: {
			sendSonData2(data) {
				let self = this

				setTimeout(function() {
					$('#myimg3').attr('src', data)
				}, 1000)
				self.srcarr[2] = data
			},
			sendSonData(data) {
				let self = this

				if (self.n == "0") {
					setTimeout(function() {
						$('#myimg1').attr('src', data)
					}, 1000)
					self.srcarr[0] = data
					self.n++
				} else {
					setTimeout(function() {
						$('#myimg2').attr('src', data)
					}, 1000)
					self.srcarr[1] = data
				}
			},
			add2() {
				this.namearr.push("")
				this.srcarr.push("")

			},
			handleClose(done) {

			},
			changetrue() {
				let self = this
				let data = {
					menu2: self.val,
					id: self.nowid
				}
				axios
					.post(self.src + "/build/changepromenu", data)
					.then(function(res) {
						self.$message('修改好了')
						self.reqNoteMenu()
						self.show = false
					})
					.catch(function(error) {
						alert(error);
					});
			},
			change() {
				let self = this
				this.val = this.nowhover
				//通过nowhover 去拿到id
				let data = {
					menu2: self.nowhover
				}
				axios
					.post(self.src + "/build/getproid", data)
					.then(function(res) {
						self.nowid = res.data._id
					})
					.catch(function(error) {
						alert(error);
					});
				this.dialogVisible3 = true
			},
			save() {
				let self = this

				let data = {
					'content': self.aboutcontent1,
					'srcarr': self.srcarr,
					'namearr': self.namearr,
					'menu2': self.nowclick,
					'isshow': self.radio
				}

				axios
					.post(self.src + "/build/addproject", data)
					.then(function(res) {
						if (res.data = "ok") {
							self.$message("添加成功")
						}
					})
					.catch(function(error) {
						alert(error);
					});
			},
			xuanran() {

			},
			test2(a) {
				let self = this
				self.nowclick = a
				self.n = 0
				let data = JSON.stringify({
					menu2: self.nowclick,
				});

				//还要做一件事，去获取这个资料
				axios
					.get(self.src + "/build/getproject", {
						params: {
							data: data,
						}
					})
					.then(function(res) {
						self.aboutcontent1 = res.data.content
						self.srcarr = res.data.srcarr
						self.namearr = res.data.namearr
						self.radio = res.data.isshow

						// console.log(self.ob)

					})
					.catch(function(error) {
						alert(error);
					});

			},
			test(e, name) {
				let self = this
				this.nowhover = name

				this.startx = event.x;
				this.starty = event.y;

			},
			reqNoteMenu() {
				let self = this;
				self.menua1 = []
				self.menua2 = []
				self.menua3 = []
				self.menua4 = []
				axios
					.get(self.src + "/build/reqNoteMenu", {

					})
					.then(function(res) {

						for (let s of res.data) {
							if (s.menu == "仿古铜建筑") {
								self.menua1.push(s.menu2)
							} else if (s.menu == "现代铜建筑") {
								self.menua2.push(s.menu2)
							} else if (s.menu == "大师艺术") {
								self.menua3.push(s.menu2)
							} else {
								self.menua4.push(s.menu2)
							}
						}

						self.test2(self.menua1[0])
					})
					.catch(function(error) {
						alert(error);
					});
			},
			clear() {
				this.show = false
				this.nowhover = ""
			},
			subNoteName() {

				let self = this;

				let data = JSON.stringify({
					menu: self.value,
					menu2: self.input.replace(/\s+/g, ""),
				});
				if (self.input == "") {
					alert("文件名不能为空")
					return
				}
				if (self.off == "0") {} else {
					return
				}
				self.off = "1"

				axios
					.get(self.src + "/build/addmenu", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						if (String(res.data) == "ok") {
							self.$message("添加成功")
							self.dialogVisible = false
							self.reqNoteMenu()
							self.show = false
						} else if (String(res.data) == "false") {
							alert("存在同名")
						}
						self.off = "0"
					})
					.catch(function(error) {
						alert(error);
					});
			},
			rmmenu() {
				let self = this

				if (self.off == "0") {} else {
					return
				}
				self.off = "1"
				let data = JSON.stringify({
					name: self.nowhover,
				});

				axios
					.get(self.src + "/build/rmNoteMenu", {
						params: {
							data: data,
						},
					})
					.then(function(res) {

						if (res.data == "ok") {
							self.off = 0
							self.clear()
							self.reqNoteMenu();
							self.show = false
						} else {
							self.$message({
								message: '删除失败',
								type: 'warning'
							});
						}

					})
					.catch(function(error) {
						alert(error);
					});

			},
			show1() {
				// if (this.show1css) {
				// 	this.show1css = false
				// } else {
				// 	this.show1css = true
				// }

			},
			show2() {
				// if (this.show2css) {
				// 	this.show2css = false
				// } else {
				// 	this.show2css = true
				// }
			},
			show3() {
				// if (this.show3css) {
				// 	this.show3css = false
				// } else {
				// 	this.show3css = true
				// }
			},
			show4() {
				// if (this.show4css) {
				// 	this.show4css = false
				// } else {
				// 	this.show4css = true
				// }
			},

		},
		components: {
			Editor,
			upload
		}
	};
</script>
<style scoped>
	.ho:hover {
		cursor: pointer;
	}

	.hov1:hover {
		cursor: pointer;
	}

	.box-card {
		width: 140px;
		margin: auto;
		position: fixed;
		left: 0;
		top: 30%;
		font-size: 14px;
		z-index: 100;
		text-align: left;
	}

	.box-card div {
		padding: 10px 1px;
		border-bottom: 1px solid #ececec;
	}
</style>
