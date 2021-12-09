<template>
	<div class="home">
		<div style="position: relative;z-index: 2;">
			<top />
		</div>
		
		<div style="padding: 20px;">
			<el-card class="box-card">
				<div>{{cabdata.news}}</div>
				<div class="box" style="padding: 20px;">
					<div v-html="cabdata.newscontent" style="text-align: left;"></div>
				</div>
			</el-card>
		</div>
	
		

	</div>
</template>

<script>
	
	import axios from "axios";
	import top from "@/components/top.vue";
	export default {
		name: "home",
		data() {
			return {
				faval2: 'Hello word!',
				value1: null,
				input: "",
				value: "",
				textarea1: '',
				cabdata: "",
				user: "登录",
				src1: "login",
				show: false,
				show2: true,
				show3: false,
				comment2: "",
				
				
				meval: "",
			};
		},
		components: {},
		mounted() {
			
			//获取内容
			this.searchGainNews()
			
		},
		watch: {

		},
		methods: {
	
			getValue2(data) {
				let self = this
				// alert(data)
				this.meval = data;
			},
		
			searchGainNews() {
				let x = Object.keys(this.$route.query)[0]
				let self = this

				let data = JSON.stringify({
					id: x,
				});

				axios
					.get(self.src + "/build/showsearch", {
						params: {
							data: data,
						},
					})
					.then(function(res) {
						
						self.cabdata = res.data
						


					})
					.catch(function(error) {
						alert(error);
					});
			},
		

		},
		components: {
			
			top
		},
	};
</script>
<style scoped>
	.hover:hover {
		cursor: pointer;
	}

	.box-card1 {
		width: 140px;
		margin: auto;
		position: absolute;
		left: 0;
		top: 30%;
		font-size: 14px;
		z-index: 100;
		text-align: left;
	}

	.box-card1 div {
		padding: 10px 1px;
		border-bottom: 1px solid #ececec;
	}

	.box-card1 div:hover {
		cursor: pointer;
	}

	.box-card2 {
		width: 140px;
		margin: auto;
		position: absolute;
		left: 0;
		top: 30%;
		font-size: 14px;
		z-index: 100;
		text-align: left;
	}

	.box-card2 div {
		padding: 10px 1px;
		border-bottom: 1px solid #ececec;
	}

	.box-card2 div:hover {
		cursor: pointer;
	}

	.space1 {
		border: 1px solid #ececec;
		height: 90vh;
		position: relative;
	}

	.space1c {
		height: 95%;
		overflow-y: scroll;
	}

	.space1c::-webkit-scrollbar {
		width: 5px;
		height: 3px;
	}

	.space1c::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: rgba(0, 0, 0, 0.2);
	}

	.space1c::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 0;
		background: rgba(0, 0, 0, 0.1);
	}

	.nav {
		margin-top: 0px;
		text-align: left;
		padding: 1vh 10vh;
	}

	.menu {
		width: 95%;
		margin: auto;
		margin-top: 0px;
		font-size: 12px;
	}

	.menu span {
		display: inline-block;
		float: left;
		height: 40px;
		line-height: 35px;
		margin-left: 0.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
		width: 60%;
	}

	.menu img {
		width: 2rem;
		float: left;
	}

	.menuc {
		padding: 5px;
		position: relative;
	}



	.menuc2 {
		height: 30px;
		line-height: 20px;
		/* margin-top: 3px; */
		padding: 5px;
		padding-left: 10px;
		position: relative;
	}

	.menuc2:hover {
		background: #d3d3d3;
		cursor: pointer;
	}

	.menuc2active {
		background: #aaaaaa;
	}
   .box{
	     width: 90%;
	     margin: auto;
	     text-align: left;
	     text-indent:10px;
   }
   .box >>>p{
	   margin-top: 10px;

   }
   .box >>>pre{
   	   margin-top: 10px;
   
   }
   .box >>>li{
	    margin-top: 10px;
   }

</style>
