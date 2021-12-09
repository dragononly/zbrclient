<template>
	<div class="home" style="background: #ececec;height: 600px;">
		<el-row>
			<el-col :span="24" style="background: #fff;margin-bottom: 10px;">
				<div style="padding: 10px;text-align: left;padding-left: 30px;">
					<router-link to="##">
						<i style="font-size: 25px;" @click="dialogVisible = true" class="el-icon-edit"></i>
					</router-link>
				</div>
			</el-col>
			<el-col :span="24" style="text-align: left;">
				首页图片需要是标准的1350*720
			</el-col>
		</el-row>

		<el-dialog title="发表新闻" :visible.sync="dialogVisible" :before-close="handleClose" width="60%">
			<div>
				<div>
					<el-row>
						<el-col :span="18">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
							<el-row style="margin-top: 3px;">
								<el-col :md="6">
									<el-select v-model="value" placeholder="图片位置">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-col>
								<el-col :md="16" style="padding: 10px;">
									<el-row>
										<el-col :md="20">
											<upload @toFatherData="sendSonData" />
										</el-col>
										<el-col :md="4"><img id="myimg" width="100px" style="margin-left: 10px;" :src="sendSonMessage"></el-col>
									</el-row>
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
			<el-row style="text-align: center;">
				<el-col :md="6" v-for="(a,b) in arr" :key="b">
					<el-row style="height: 190px;text-align: left;padding: 10px;background: #fff;margin: 7px;">
						<el-col :md="24" style="text-align: center;">
							<router-link :to="'m1?'+a._id" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align: center;">
								{{a.news}}
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
					{
						value: '大型场馆',
						label: '大型场馆'
					},
					{
						value: '酒店装饰',
						label: '酒店装饰'
					}, {
						value: '精品铜门',
						label: '精品铜门'
					}, {
						value: '铜制幕墙',
						label: '铜制幕墙'
					}, {
						value: '其它装饰',
						label: '其它装饰'
					}, {
						value: '壁画艺术',
						label: '壁画艺术'
					}, {
						value: '熔铜作品',
						label: '熔铜作品'
					}, {
						value: '雕塑造像',
						label: '雕塑造像'
					}, {
						value: '其他精品',
						label: '其他精品'
					}, {
						value: '铜瓦',
						label: '铜瓦'
					}, {
						value: '斗拱',
						label: '斗拱'
					}, {
						value: '砖墙',
						label: '砖墙'
					}, {
						value: '柱栏',
						label: '柱栏'
					}, {
						value: '其他构件',
						label: '其他构件'
					}
				],
				options: [{
						value: '无',
						label: '无'
					}, {
						value: '首页轮播图1',
						label: '首页轮播图1'
					}, {
						value: '首页轮播图2',
						label: '首页轮播图2'
					},
					{
						value: '首页轮播图3',
						label: '首页轮播图3'
					},
					{
						value: '首页轮播图4',
						label: '首页轮播图4'
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
				// this.sendSonMessage = data;
				this.abouttitle = data
				setTimeout(function() {
					$('#myimg').attr('src', data)
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
				self.dialogVisible = true
				//通过id查询数据
				self.nowclick = "首页轮播"
				let data = {
					id: self.nowid,
					news: self.input,
					newsimg: self.abouttitle,
					newscontent: self.faval,
					"weizhi": self.value,
					"leixing": self.value2,
					"zhaiyao": self.zhaiyao
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
						self.sendSonMessage = res.data.newsimg
					})
					.catch(function(error) {
						alert(error);
					});
			},
			getnews(name) {

				let self = this
				let data = {}
				if (name == undefined) {
					name = "首页轮播"
					data = {
						"name": "首页轮播"
					}
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
				self.nowclick = "首页轮播"
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
				self.nowclick = "首页轮播"
				let data = {
					'NewsName': self.input,
					'Content': self.faval,
					"newsimg": self.abouttitle,
					"weizhi": self.value,
					"zhaiyao": self.zhaiyao,
					"leixing": self.value2,
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

	/deep/ .van-tab {
		width: 15%;
	}
</style>
