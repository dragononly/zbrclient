<template>
	<div class="nav6" style="clear: both">
		<div class="hidden-xs-only" style="width: 60%;margin: auto;">
			<el-row style="text-align: left;color: #c3c0c5;padding-top:150px">
				<el-col :md="8" style="font-size: 12px;color: #EFEBF2;padding: 10px;">
					<div><img width="260px" height="176px" src="../../assets/address/d1.png" alt=""></div>
					<div style="margin-top: 10px;"><i class="el-icon-s-home"></i> 江南铜屋:{{ctbowuguan}}</div>
				</el-col>
				<el-col :md="8" style="font-size: 12px;color: #EFEBF2;padding: 10px;">
					<div><img width="260px" height="176px" src="../../assets/address/d2.png" alt=""></div>
					<div style="margin-top: 10px;"><i class="el-icon-s-home"></i>公司地址:{{ctcpaddr}}</div>
				</el-col>
				<el-col :offset="2" :md="6" style="text-align: left;color: #c3c0c5;">
					<div>
						<div style="color: #fff;font-size: 25px;font-weight: bold;letter-spacing: 1px;">联系我们</div>
						<div style="color: #E9E5EC;margin-top: 13px;">{{cttitle}}</div>
						<div style="color:#807E82;font-size: 9px;margin-top:14px;">{{ctkouhao}}</div>
					</div>
					<div style="font-size: 13px;color: #EFEBF2;">
						<div style="margin-top: 20px;"><i class="el-icon-phone"></i>公司电话: {{ctcpphone}}</div>
						<div style="margin-top: 20px;"><i class="el-icon-phone"></i>电<span
								style="margin-left: 26px;">话</span>:{{ctcpphoneme}}</div>
						<div style="margin-top: 20px;"><i class="el-icon-eleme"></i>公司邮箱: {{ctcpemail}}</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="hidden-md-and-up" style="width: 80%;margin: auto;text-align: center;">
			<el-row style="text-align: left;color: #c3c0c5;padding-top:50px;">
				<el-col :xs="24" style="font-size: 12px;color: #EFEBF2;padding: 10px;">
					<div><img width="100%" src="../../assets/address/d1.png" alt=""></div>
					<div style="margin-top: 10px;"><i class="el-icon-s-home"></i> 江南铜屋:{{ctbowuguan}}</div>
				</el-col>
				<el-col :xs="24" style="font-size: 12px;color: #EFEBF2;padding: 10px;">
					<div><img width="100%" src="../../assets/address/d2.png" alt=""></div>
					<div style="margin-top: 10px;"><i class="el-icon-s-home"></i>公司地址:{{ctcpaddr}}</div>
				</el-col>
				<el-col :xs="24" style="color: #c3c0c5;margin-top: 30px;">
					<div style="width: 70%;margin: auto;margin-top: 30px;">
						<div>
							<div style="color: #fff;font-size: 25px;font-weight: bold;letter-spacing: 1px;">
								联系我们
							</div>
							<div style="color: #E9E5EC;margin-top: 5px;">{{cttitle}}</div>
							<div style="color:#fff;font-size: 9px;margin-top:5px;">{{ctkouhao}}</div>
						</div>
						<div style="font-size: 13px;color: #EFEBF2;margin-bottom: 50px;">
							<div style="margin-top: 5px;"><i class="el-icon-phone"></i>公司电话: {{ctcpphone}}</div>
							<div style="margin-top: 5px;"><i class="el-icon-phone"></i>电<span
									style="margin-left: 26px;">话</span>:{{ctcpphoneme}}</div>
							<div style="margin-top: 5px;"><i class="el-icon-eleme"></i>公司邮箱: {{ctcpemail}}</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cttitle: sessionStorage.cttitle,
				ctkouhao: sessionStorage.ctkouhao,
				ctbowuguan: sessionStorage.ctbowuguan,
				ctcpaddr: sessionStorage.ctcpaddr,
				ctcpphone: sessionStorage.ctcpphone,
				ctcpemail: sessionStorage.ctcpemail,
				ctcpphoneme: sessionStorage.ctcpphoneme
			}
		}
	}
</script>

<style scoped="scoped">
	.nav6 {
		background: url("../../assets/all/背景.jpeg");
		background-size: 100%;
		
		margin-top: 2px;
	}
</style>
