<template>
	<div style="background: #ececec;padding: 10px;">
		<div style="text-align: left;padding: 5px;background:  #717171;color: #fff;">关于我们</div>
		<van-cell-group>
			<van-field v-model="abouttitle" label="标题" placeholder="请输入标题" />
			<van-field v-model="aboutcontent1" rows="2" autosize label="内容1" type="textarea" maxlength="137" placeholder="请输入内容"
			 show-word-limit />
			<van-field v-model="aboutcontent2" rows="2" autosize label="内容2" type="textarea" maxlength="137" placeholder="请输入内容"
			 show-word-limit />
		</van-cell-group>

		<div style="text-align: left;padding: 5px;background:  #717171;color: #fff;">联系我们</div>
		<van-field v-model="cttitle" label="标题" placeholder="请输入标题" />
		<van-field v-model="ctkouhao" label="口号" placeholder="请输入口号" />
		<van-field v-model="ctbowuguan" label="博物馆地址" placeholder="请输入博物馆地址" />
		<van-field v-model="ctcpaddr" label="公司地址" placeholder="请输入公司地址" />
		<van-field v-model="ctcpphone" label="公司电话" placeholder="请输入公司电话" />
		<van-field v-model="ctcpphoneme" label="电话" placeholder="请输入电话" />
		<van-field v-model="ctcpemail" label="公司邮箱" placeholder="请输入公司邮箱" />

		<div style="text-align: left;padding: 5px;background:  #717171;color: #fff;">最底部版权</div>
		<van-field v-model="bqcpname" label="公司名" placeholder="请输入公司名" />
		<van-field v-model="icp" label="ICP备案号" placeholder="请输入备案号" />


		<van-button @click="save()" type="info" block="">保存</van-button>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: 'adminhome',
		data() {
			return {
				abouttitle: "",
				aboutcontent1: "",
				aboutcontent2: "",
				cpaddr: "",
				cpphone: "",
				cpemail: "",
				cpbus: "",
				cpcar: "",
				cttitle: "",
				ctkouhao: "",
				ctbowuguan: "",
				ctcpaddr: "",
				ctcpphone: "",
				ctcpemail: "",
				bqcpname: "",
				ctcpphoneme:"",
				icp: "",
				date: {
					type: Date,
					default: Date.now
				},
			};
		},
		mounted() {
			let self = this
			axios
				.get(self.src + "/build/getbasics")
				.then(function(res) {
					
					self.abouttitle=res.data.abouttitle
					self.aboutcontent1=res.data.aboutcontent1
					self.aboutcontent2=res.data.aboutcontent2
					self.cpaddr=res.data.cpaddr
					self.cpphone=res.data.cpphone
					self.cpemail=res.data.cpemail
					self.cpbus=res.data.cpbus
					self.cpcar=res.data.cpcar
					self.cttitle=res.data.cttitle
					self.ctkouhao=res.data.ctkouhao
					self.ctbowuguan=res.data.ctbowuguan
					self.ctcpaddr=res.data.ctcpaddr
					self.ctcpphone=res.data.ctcpphone
					self.ctcpphoneme=res.data.ctcpphoneme
					self.ctcpemail=res.data.ctcpemail
					self.bqcpname=res.data.bqcpname
					self.icp=res.data.icp
				})
				.catch(function(error) {
					alert(error);
				});
		},
		methods: {
			save() {
				let self = this
				let data = JSON.stringify({
					abouttitle: self.abouttitle,
					aboutcontent1: self.aboutcontent1,
					aboutcontent2: self.aboutcontent2,
					cpaddr: self.cpaddr,
					cpphone: self.cpphone,
					cpemail: self.cpemail,
					cpbus: self.cpbus,
					cpcar: self.cpcar,
					cttitle: self.cttitle,
					ctkouhao: self.ctkouhao,
					ctbowuguan: self.ctbowuguan,
					ctcpaddr: self.ctcpaddr,
					ctcpphone: self.ctcpphone,
					ctcpemail: self.ctcpemail,
					bqcpname: self.bqcpname,
					ctcpphoneme:self.ctcpphoneme,
					icp:self.icp
				});
				axios
					.get(self.src + "/build/basics", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						if (res.data == "ok") {
							self.$message("修改成功")
						}
					})
					.catch(function(error) {
						alert(error);
					});
			}
		}

	};
</script>

<style>
</style>
