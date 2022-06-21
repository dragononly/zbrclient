<template>
	<div class="home">
		<el-progress :text-inside="true" :stroke-width="24" :percentage="jindu" status="success"></el-progress>
		<el-upload :file-list="fileList" :on-change="handleChange" :http-request="handleUpload" class="upload-demo"
		 :before-upload="beforeAvatarUpload" action multiple>
			<!-- <i class="el-icon-upload"></i> -->
			<!-- 	<div class="el-upload__text">
				将文件拖到此处，或
				<em>点击上传</em>
			</div> -->
			<!-- <em>点击上传</em> <-->
			<div style="height: 2px;"></div>
			<el-button size="small" type="primary">点击上传</el-button>
		</el-upload>

	</div>
</template>

<script>
	// const OSS = require('ali-oss');
	// const key = require("../config/key.js")
	var Minio = require('minio')
	import {
		v4 as uuidv4
	} from 'uuid';
	// 具体值需要去阿里云控制台获取
	// let client = new OSS({
	// 	// // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
	// 	region: 'oss-cn-hangzhou',
	// 	// // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
	// 	accessKeyId: key.accessKeyId,
	// 	accessKeySecret: key.accessKeySecret,
	// 	bucket: 'bsuir',
	// });
	var minioClient = new Minio.Client({
		endPoint: 'wx.moono.vip',
		port: 8999,
		useSSL: true,
		accessKey:  '111111111',
		secretKey: '111111111'
	});
	export default {
		name: 'home',
		data() {
			return {
				filename: [],
				fileraw: [],
				realFileList: [],
				jindu: 0,
				fileList: []

			};
		},
		mounted() {

		},
		methods: {

			handleChange() {
				// this.filename.push(file.name)
				// this.fileraw.push(file.raw)

				// console.log(fileList)

			},

			handleUpload(op) {
				let self=this
				let url = "zbr/"

			
				let objectkey = url + uuidv4() + op.file.name

			
                //  console.log(op);
				// 定义上传方法。
				async function multipartUpload() {

					let fr = new FileReader();//用FileReader 读取文件流
					fr.readAsArrayBuffer(op.file);
					fr.onload = function(ex) {

					minioClient.putObject('mynumber1', objectkey, Buffer.from(ex.target.result), op.file.size,function(err) {
						if(err) {
							return console.log(err); // err should be null
						}
						let last = 'https://wx.moono.vip:8999/mynumber1/' + objectkey
						// console.log("Success", objInfo);
						self.$emit("toFatherData", last)
					})
					
					}
				
					

					// try {
					// 	// object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
					// 	let result = await client.multipartUpload(objectkey, op.file, {
					// 		progress: function(p, checkpoint) {
					// 			// 断点记录点。浏览器重启后无法直接继续上传，您需要手动触发上传操作。
					// 			tempCheckpoint = checkpoint;
					// 			let last = 'http://aliyun.moono.vip/' + objectkey

					// 			self.jindu = parseInt(p * 100)

					// 			if (self.jindu == 100) {
					// 				self.$emit("toFatherData", last)
					// 			}
					// 		},
					// 		meta: {
					// 			year: 2020,
					// 			people: 'test'
					// 		},
					// 		mime: 'image/jpeg'
					// 	})
					// } catch (e) {
					// 	console.log(e);
					// }
				}

				// 开始分片上传。
				multipartUpload();

				// 暂停分片上传。
				// client.cancel();

				// 恢复上传。
				// let resumeclient = new OSS({
				// 	// // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
				// 	region: 'oss-cn-hangzhou',
				// 	// // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
				// 	accessKeyId: key.accessKeyId,
				// 	accessKeySecret: key.accessKeySecret,
				// 	bucket: 'bsuir',
				// });
				// async function resumeUpload() {
				// 	try {
				// 		let result = await resumeclient.multipartUpload(objectkey, op.file, {
				// 			progress: function(p, checkpoint) {
				// 				tempCheckpoint = checkpoint;
				// 				self.jindu=parseInt(p*100)
				// 			},
				// 			checkpoint: tempCheckpoint,
				// 			meta: {
				// 				year: 2020,
				// 				people: 'test'
				// 			},
				// 			mime: 'image/jpeg'
				// 		})
				// 	} catch (e) {
				// 		console.log(e);
				// 	}
				// }

				// resumeUpload();

				// // self.filename.forEach((item, i) => {
				// 	client.put(url + op.file.name, op.file)
				// 		.then(function(res) {
				// 			// 上传图片，返回结果，将图片插入到编辑器中
				// 			console.log(res)

				// 		}).catch(function(err) {
				// 			console.log(err)
				// 			alert("上传失败")
				// 		})
				// // });
				// return



			},
			beforeAvatarUpload(file) {

			}
		},
		components: {}
	};
</script>
<style scoped></style>
