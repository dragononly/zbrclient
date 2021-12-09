<template>
	<div class="home" style="background: #ececec;">
		<div style="padding: 10px;text-align: left;padding-left: 30px;">
			<router-link to="##">
				<i style="font-size: 25px;" @click="dialogVisible = true" class="el-icon-edit"></i>
			</router-link>
		</div>
		<el-dialog title="发表新闻" :visible.sync="dialogVisible" :before-close="handleClose" width="60%">
			<div>
				<div>
					<el-row>
						<el-col :span="24">
							<el-input v-model="input" placeholder="请输入内容"></el-input>
							<el-row style="padding: 10px 0;">
								<el-col :md="10">
									<upload @toFatherData="sendSonData" />
								</el-col>
								<el-col :md="4"><img id="myimg" width="100px" style="margin-left: 10px;" :src="sendSonMessage"></el-col>
								<el-col :md="10"><van-field v-model="value1" label="排序" left-icon="smile-o" right-icon="music-o" placeholder="数字越小级别越高" /></el-col>
							</el-row>
			
						    <van-field v-model="zhaiyao" rows="2" autosize label="摘要" type="textarea" maxlength="158" placeholder="请输入摘要内容"
						     show-word-limit />
						</el-col>
						<el-col :span="6">
							<el-select v-model="value" placeholder="分类">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
			<el-row v-for="(a,b) in arr" :key="b" style="text-align: left;padding: 10px;background: #fff;margin: 7px;">
				<el-col :md="14">
					<router-link :to="'m2?'+a._id">
						{{a.news}}
					</router-link>
				</el-col>
				<el-col :md="2">
					<van-button type="primary" @click="up(a._id,b)" size="mini">编辑</van-button>
				</el-col>
				<el-col :md="2">
					<van-button type="primary" @click="de(a._id)" size="mini">删除</van-button>
				</el-col>
				<el-col :md="6">
					{{a.date}}
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import Editor from "@/components/Editor";
	import upload from "@/components/upload";
	import axios from "axios";
	import $ from "jquery"
	export default {
		name: 'home',
		data() {
			return {
				activeName: 'first',
				value1:"1",
				arr: [],
				sendSonMessage: "",
				zhaiyao:"",
				list: "",
				listnew: "",
				listhot: "",
				authority: "",
				faval: 'Hello word!',
				dialogVisible: false,
				abouttitle: "",
				input: "",
				value: "类别1",
				woid:[],
				options: [{
						value: '类别1',
						label: '类别1'
					},
					{
						value: '类别2',
						label: '类别2'
					},
					{
						value: '类别3',
						label: '类别3'
					},
					{
						value: '类别4',
						label: '类别4'
					},
					{
						value: '类别5',
						label: '类别5'
					},
				],
				nowid: "",
			};
		},
		mounted() {
			//去获取当前页面的目录
			let self = this
			self.getnews()
			$('.el-icon-close').click(function(){
				self.dialogVisible=false
			})
		},
		methods: {
			sendSonData(data) {
				let self=this
				// this.sendSonMessage = data;
				this.abouttitle = data
			    setTimeout(function(){
					self.sendSonMessage=data
				},1000)
				
			},
			handleClose(done) {

			},
			getnews() {
				let self = this
				self.woid=[]
				axios
					.get(self.src + "/build/getnews")
					.then(function(res) {
						self.arr = res.data
                        for (let s of self.arr) {
                        	self.woid.push(s.paixu)
                        }
					})
					.catch(function(error) {
						alert(error);
					});
			},
			up2() {
				let self = this
				self.dialogVisible = true
				//通过id查询数据
				let data = {
					id: self.nowid,
					news: self.input,
					newstype: self.value,
					newsimg: self.abouttitle,
					newscontent: self.faval,
					"zhaiyao":self.zhaiyao,
					"paixu":self.value1
				}
				axios
					.post(self.src + "/build/upnews", data)
					.then(function(res) {
						if (res.data) {
							self.$message("更新成功")
							self.dialogVisible = false
							self.getnews()
						}
					})
					.catch(function(error) {
						alert(error);
					});
			},
			up(id,key) {
				let self = this
				self.dialogVisible = true
				
				self.value1=self.woid[key]
				//通过id查询数据
				let data = JSON.stringify({
					id: id,

				});
				self.nowid = id
				axios
					.get(self.src + "/build/getonenews", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						self.zhaiyao=res.data.zhaiyao
						self.abouttitle = res.data.newsimg
						self.input = res.data.news
						self.value = res.data.newstype
						self.faval = res.data.newscontent
					})
					.catch(function(error) {
						alert(error);
					});
			},
			de(id) {
				let self = this
				let data = JSON.stringify({
					id: id,

				});

				axios
					.get(self.src + "/build/deletenew", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						if (res.data == "ok") {
							self.$message("成功")
							self.getnews()
						}
					})
					.catch(function(error) {
						alert(error);
					});
			},
			save() {
				let self = this
				let data = {
					'NewsName': self.input,
					'Content': self.faval,
					"newstype": self.value,
					"newsimg": self.abouttitle,
					"zhaiyao":self.zhaiyao,
					"paixu":self.value1
				}
				axios
					.post(self.src + "/build/addnew", data)
					.then(function(res) {
						if (res.data = "ok") {
							self.dialogVisible = false
							self.getnews()
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
			Editor,upload

		}
	};
</script>
<style scoped>
	/* .w-e-text-container{
	    height: 50vh !important;
	} */
	
</style>
