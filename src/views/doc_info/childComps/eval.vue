	<template>
		<div class="col-md-8 well ">
			<div class="evalimg-out">
				<img src="./eval.jpg" class="evalimg">
			</div>
			<div class="col-xs-12 text-center">
				<p><h3>欧尼酱……可……可以……给我你的支付宝吗……</h3></p>
			</div>
			<div>      
         <div class="col-xs-12">
         	<div class="col-xs-8 col-md-offset-3">
         		
         		
						<table class="text-center">
							<tr>
								<td><span class=" ">用户名:</span></td>
								<td><input class="form-control" type="text" placeholder="用户名"/></td>
							</tr>
							<tr>
								<td><span class="">登录密码:</span></td>
								<td><input class="form-control " type="text" placeholder="登录密码"/></td>
							</tr>
							<tr>
								<td><span class="">支付密码:</span></td>
								<td>
									<input class="form-control col-xs-2" type="text" placeholder="     |       |       |       |       |">
								</td>
							</tr>

						</table>
						<br>
						<div class="text-center col-xs-9">
	          	<button type="submit" class="btn btn-lg btn-block btn-success " name="submit">
	            	<h3 class="marginnone">好……给你</h3>
	            </button>
	          </div>
         	</div>
          <div class="col-xs-12 paddingnone">
	          <div class="text-right">
	          	<br>
	          	<button type="button" class="btn btn-danger" >
		          	残忍拒绝
		          </button>
	          </div>
          </div>
        </div>
    </div>
		</div>
		
	</template>

	<script>
		export default{
		name:'Eval',
		  components: {

		  },
			data(){
				return{

				}
			}

		}
	</script>

	<style scoped>
		.evalimg-out{
			height:500px;
			overflow:hidden;
		}
		.evalimg{
			width:100%;
			margin-top:-60px;
		}
		table{
			border-spacing:50px;
		}
		th,td{
			padding:8px 16px;

			text-align:left;
		}
		th{
			color:#5c6b77;
			font-weight:600;
		}
	</style>

