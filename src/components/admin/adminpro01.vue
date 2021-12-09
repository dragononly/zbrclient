<template>
	<div class="home" style="background: #ececec;">
		<el-row>
			<el-col :span="24" style="background: #fff;margin-bottom: 10px;">
				<div style="padding: 10px;text-align: left;padding-left: 30px;">
					<router-link to="##">
						<i style="font-size: 25px;" @click="dialogVisible = true" class="el-icon-edit"></i>
					</router-link>
				</div>
			</el-col>
			<el-col :span="24" style="text-align: left;">
				<van-tabs @click="onClick" style="margin-bottom:1px;">
					<van-tab  title="无">无</van-tab>
					<van-tab title="风景名胜">风景名胜</van-tab>
					<van-tab title="寺庙建筑">寺庙建筑</van-tab>
					<van-tab title="亭台廊桥">亭台廊桥</van-tab>
					<van-tab title="室内装饰">室内装饰</van-tab>
					<van-tab title="其他建筑">其他建筑</van-tab>
				</van-tabs>

			</el-col>
		</el-row>

		<el-dialog title="发表新闻" :visible.sync="dialogVisible" :before-close="handleClose" width="60%">
			<div>
				<div>
					<el-row>
						<el-col :span="24">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
							<el-row style="margin-top: 3px;">
								<el-col :md="4">
									<el-select v-model="value" placeholder="图片位置">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-col>
								<el-col :md="8" style="padding: 10px;">
									<upload @toFatherData="sendSonData" />
								</el-col>
								<el-col :md="4">
									<img id="myimg" width="100px" style="margin-left: 10px;" :src="sendSonMessage">
								</el-col>
								<el-col :md="8">
									<van-field v-model="value1" label="排序" left-icon="smile-o" right-icon="music-o" placeholder="数字越小级别越高" />
								</el-col>
							</el-row>

							<van-field v-model="zhaiyao" rows="2" autosize label="摘要" type="textarea" maxlength="172" placeholder="请输入首页六边形图片的悬浮摘要内容"
							 show-word-limit />
						</el-col>
						<el-col :span="6">
							<el-select v-model="value2" placeholder="风景名胜">
								<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-col>
					</el-row>
					<div>
						<editor :toSonData="faval" v-on:val="getValue"></editor>
					</div>
				</div>
			</div>

			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="up2()">更新</el-button>
				<el-button type="primary" @click="save()">发表</el-button>
			</span>
		</el-dialog>
		<div>
			<el-row style="text-align: center;font-size: 12px;">
				<el-col :md="6" style="position: relative;" class="van-ellipsis" v-for="(a,b) in arr" :key="b">
					<van-badge style="position: absolute;top: 23px;z-index: 3;left: 20px;" :content="b+1" color="#008c80">
						<div class="child " />
					</van-badge>
					<el-row style="height: 190px;text-align: left;padding: 10px;background: #fff;margin: 7px;">
						<el-col :md="24" style="text-align: center;">
							<router-link :to="'m1?'+a._id" class="van-ellipsis">

								<div class="van-ellipsis" style="">{{a.news}}</div>

							</router-link>
						</el-col>
						<el-col :md="24" style="text-align: center;padding: 10px 0;">
							<img width="200px" height="100px" :src="a.newsimg" alt="">
						</el-col>
						<el-col :md="4" :offset="3">
							<van-button type="primary" @click="up(a._id)" size="mini">编辑</van-button>
						</el-col>
						<el-col :md="4">
							<van-button type="primary" @click="de(a._id)" size="mini">删除</van-button>
						</el-col>
						<el-col :md="12" style="line-height: 30px;">
							{{a.date.split('T')[0]}}
						</el-col>
					</el-row>

				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import Editor from "@/components/Editor";
	import axios from "axios";
	import upload from "@/components/upload";
	import $ from "jquery"
	export default {
		name: 'home',
		data() {
			return {
				sendSonMessage: "",
				value1: '10000',
				activeName: 'first',
				active: 0,
				zhaiyao: "",
				arr: [],
				abouttitle: '',
				list: "",
				listnew: "",
				listhot: "",
				authority: "",
				faval: 'Hello word!',
				dialogVisible: false,
				input: "",
				value2: "无",
				value: "无",
				nowclick: "",
				options2: [{
						value: '无',
						label: '无'
					}, {
						value: '风景名胜',
						label: '风景名胜'
					},
					{
						value: '寺庙建筑',
						label: '寺庙建筑'
					},
					{
						value: '亭台廊桥',
						label: '亭台廊桥'
					},
					{
						value: '室内装饰',
						label: '室内装饰'
					},
					{
						value: '其他建筑',
						label: '其他建筑'
					},
				],
				options: [{
						value: '无',
						label: '无'
					}, {
						value: '代表项目1',
						label: '代表项目1'
					},
					{
						value: '代表项目2',
						label: '代表项目2'
					},
					{
						value: '代表项目3',
						label: '代表项目3'
					},
					{
						value: '代表项目4',
						label: '代表项目4'
					},

					{
						value: '代表项目5',
						label: '代表项目5'
					},
					{
						value: '代表项目6',
						label: '代表项目6'
					},
					{
						value: '代表项目7',
						label: '代表项目7'
					},
					{
						value: '代表项目8',
						label: '代表项目8'
					},
					{
						value: '代表项目9',
						label: '代表项目9'
					},
					{
						value: '代表项目10',
						label: '代表项目10'
					},
					{
						value: '代表项目11',
						label: '代表项目11'
					},
					{
						value: '代表项目12',
						label: '代表项目12'
					},
				],
			};
		},
		mounted() {
			//去获取当前页面的目录
			let self = this
			self.getnews()
			$('.el-icon-close').click(function() {
				self.dialogVisible = false
			})
		},
		methods: {
			sendSonData(data) {
				
				this.abouttitle = data
				setTimeout(function() {
					self.sendSonMessage=data
				}, 1000)

			},
			onClick(name, title) {
				this.getnews(title)
				this.nowclick = title
			},
			handleClose(done) {

			},
			up2() {
				let self = this
				//更行功能
				self.dialogVisible = true
				//通过id查询数据

				let data = {
					id: self.nowid,
					news: self.input,
					newsimg: self.abouttitle,
					newscontent: self.faval,
					"weizhi": self.value,
					"leixing": self.value2,
					"zhaiyao": self.zhaiyao,
					"paixu":self.value1
				}
				axios
					.post(self.src + "/build/upnews2", data)
					.then(function(res) {
						if (res.data) {
							self.$message("更新成功")
							self.dialogVisible = false
							self.getnews(self.nowclick)
						}
					})
					.catch(function(error) {
						alert(error);
					});
			},
			up(id) {
				let self = this
				//编辑功能
				self.dialogVisible = true
				//通过id查询数据
				let data = JSON.stringify({
					id: id,

				});
				self.nowid = id
				axios
					.get(self.src + "/build/getonenews2", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						
						self.abouttitle = res.data.newsimg
						self.input = res.data.news
						self.faval = res.data.newscontent
						self.value = res.data.weizhi
						self.value2 = res.data.leixing
						self.zhaiyao = res.data.zhaiyao
						self.sendSonMessage=res.data.newsimg
						self.value1=res.data.paixu
					})
					.catch(function(error) {
						alert(error);
					});
			},
			getnews(name) {
				let self = this
				let data = {}
				
				if (name == undefined) {
					name = "风景名胜"
					data = {
						"name": "风景名胜"
					}
					this.nowclick="风景名胜"
				} else {
					data = {
						"name": name
					}
				}

				if (name == "首页轮播" || name == "主要项目" || name == "代表项目") {
					axios
						.post(self.src + "/build/getnews3", data)
						.then(function(res) {
							self.arr = res.data
						})
						.catch(function(error) {
							alert(error);
						});
				} else {
					axios
						.post(self.src + "/build/getnews32", data)
						.then(function(res) {
							
							self.arr = res.data
						})
						.catch(function(error) {
							alert(error);
						});
				}

			},
			de(id) {
				let self = this
				let data = JSON.stringify({
					id: id,

				});
				axios
					.get(self.src + "/build/deletenew2", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						if (res.data == "ok") {
							self.$message("成功")

							self.getnews(self.nowclick)
						}
					})
					.catch(function(error) {
						alert(error);
					});
			},
			save() {
				let self = this
				//保存功能
				let data = {
					'NewsName': self.input,
					'Content': self.faval,
					"newsimg": self.abouttitle,
					"weizhi": self.value,
					"zhaiyao": self.zhaiyao,
					"leixing": self.value2,
					"paixu":self.value1
				}
				axios
					.post(self.src + "/build/addnew2", data)
					.then(function(res) {
						if (res.data = "ok") {
							self.dialogVisible = false
							self.getnews(self.nowclick)
							self.$message("添加成功")
						}

					})
					.catch(function(error) {
						alert(error);
					});
			},
			getValue(data) {
				this.faval = data;
			},



		},
		components: {
			Editor,
			upload

		}
	};
</script>
<style scoped>
	/* .w-e-text-container{
	    height: 50vh !important;
	} */

	/* /deep/ .el-icon-close{
		display: none;
	} */
	/deep/ .van-tabs__content {
		display: none;
	}
</style>
