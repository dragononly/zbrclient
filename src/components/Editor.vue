<template>
	<div>
		<div ref="editor" style="text-align:left;" ></div>
	</div>
</template>

<script>
	import E from 'wangeditor';
	const OSS = require('ali-oss');
	import { v4 as uuidv4 } from 'uuid';
	const key=require("../config/key.js")
	//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
	export default {
		name: 'editor',
		props: ["toSonData"],
		data() {
			return {
				editorContent: '222',
				me: "",
				off: "0"
			};
		},
		watch: {
			editorContent(old, v) {
				this.$emit('val', this.editorContent);

			},
			toSonData() {
				if (this.toSonData !== this.me.txt.html()) {
					this.me.txt.html(this.toSonData)
				}

			}
		},
		methods: {},
		mounted() {
			let self = this;
			var editor = new E(this.$refs.editor);

			self.me = editor
			editor.config.onchange = html => {
				this.editorContent = html;

			};
			
			// 具体值需要去阿里云控制台获取
			let client = new OSS({
			  // // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
			  region: 'oss-cn-hangzhou',
			  // // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
			accessKeyId: key.accessKeyId,
			accessKeySecret: key.accessKeySecret,
			  bucket: 'bsuir',
			});
			var n
			editor.config.customUploadImg = function (resultFiles, insertImgFn) {
			    // resultFiles 是 input 中选中的文件列表
			    // insertImgFn 是获取图片 url 后，插入到编辑器的方法
				let id=uuidv4()
			
			  
			    client.put('myImg/any/'+id, resultFiles[0])
			      .then(function (res) {
			        // 上传图片，返回结果，将图片插入到编辑器中
					  sessionStorage.imgid+=n
			        insertImgFn(res.url)
					self.$emit("toFatherData", res.url)
			      }).catch(function (err) {
			        console.log(err)
			      })
			}

			editor.create();
			

			
		}
	};
</script>

<style scoped>

</style>
