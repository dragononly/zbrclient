<template>
	<div>
		<div class="hidden-xs-only">
			<img width="100%"
				src="../assets/all/1.gif">
		</div>
		<div class="hidden-md-and-up">
			<img width="100%" style="margin-top: -150px;"
				src="../assets/all/phone.gif">
		</div>
	</div>

</template>

<script>
	import axios from "axios";
	import top from "@/components/top.vue";
	import foot from "@/components/foot.vue";
	export default {
		name: "home",
		data() {
			return {};
		},
		mounted() {
			let self = this

			axios
				.get(self.src + "/build/getbasics")
				.then(function(res) {
					sessionStorage.abouttitle = res.data.abouttitle
					sessionStorage.aboutcontent1 = res.data.aboutcontent1
					sessionStorage.aboutcontent2 = res.data.aboutcontent2
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
					sessionStorage.ctcpphoneme = res.data.ctcpphoneme
					sessionStorage.ctcpemail = res.data.ctcpemail
					sessionStorage.bqcpname = res.data.bqcpname
					sessionStorage.icp = res.data.icp
				})
				.catch(function(error) {
					alert(error);
				});
			setTimeout(function() {
				self.$router.push("Home2")
			}, 3000)


		},
		methods: {

		},
		components: {
			top,
			foot,
		},
	};
</script>
