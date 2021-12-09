<template>
	<div class="home">

		<top msg="false" />
		<div style="background: #efefef;">
			<div class="sc" style="padding-top: 60px;">
				<img ref="ref1" width="3920px" src="../../assets/c2/lishi.jpg">
			</div>
		</div>
		<foot msg="o" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import top from '@/components/top.vue';
	import foot from '@/components/foot.vue';
	export default {
		name: 'home',
		data() {
			return {

			};
		},
		components: {
			top,
			foot
		},
		mounted() {
			let self = this
			let n = 0
			setInterval(function() {
				if (n >= -2200) {
					n--

				} else {
					n = 0
				}
				self.$refs.ref1.style.marginLeft = n + "px"


			}, 10)
		},
		methods: {
			handleClick(t, e) {
				// this.val = t.label
				// let self = this
				// switch (t.label) {
				// 	case "咨询":
				// 		self.valc = "Consulting"
				// 		break;
				// 	case "设计":
				// 		self.valc = "Design"
				// 		break;
				// 	case "技术":
				// 		self.valc = "Technology"
				// 		break;
				// 	case "管理":
				// 		self.valc = "Management"
				// 		break;
				// }

			}
		}
	};
</script>
<style scoped>
	.sc {
		overflow-x: scroll;
	}

	.sc::-webkit-scrollbar {
		width: 2px;
		height: 10px;
	}

	.sc::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background: #535353;

	}
</style>
