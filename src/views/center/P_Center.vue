	<template>
		<div class="container">
			<div class="row ">
				<div class="col-md-12">
					<div class="userbgi">
						<div class="bgi_filter"></div>
						<div class="user_info">
							<table>
								<tr>
									<td>
										<div class="userface">
					            <img :src="get_userface"  class="maxh">
					          </div>
									</td>
									<td>
										<div class="user_text">
											<div class="user_name"><strong>{{this.$store.state.username}}</strong></div>
											<div class="user_sign">{{this.$store.state.usersign}}</div>
										</div>
									</td>
								</tr>
							</table>
						</div>	 
				  </div>
				  <nav class="navbar navbar-default user_fun_list">
					  <div class="container">
					    <ul class="nav navbar-nav">
			        <li :class="{'active':navbarstatus==1}" @click='changestate(1)'>
			        	<router-link :to="'/porfiler/userorder'" >我的购物</router-link>
			        </li>	
			        <li :class="{'active':navbarstatus==2}" @click='changestate(2)'>
			        	<router-link :to="'/porfiler/useraddrees'" >我的地址</router-link>
			        </li>
			        <li :class="{'active':navbarstatus==3}" @click='changestate(3)'>
			        	<router-link :to="'/porfiler/editporfiler'">修改资料</router-link>
			        </li>
			        <li :class="{'active':navbarstatus==4}" @click='changestate(4)'>
			        	<router-link :to="'/porfiler/Security'">安全设置</router-link></li>
			      </ul>
					  </div>
					</nav>
				</div>
				<div>
					<router-view></router-view>

				</div>
				
			</div>
			
		</div>
	</template>

<script>
	import EditProfile from '@/views/center/childComps/EditProfile'
	export default{
	name:'Porfiler',
	  components: {
	  	EditProfile,
	  },
		data(){
			return{
				navbarstatus:1,
				hasface:1
			}
		},
		methods:{
			changestate(status){
				this.navbarstatus=status;
			}
		},
		computed:{
			get_userface(){
				let _vue=this;
	      if(this.$store.state.hasface==1){
	        return _vue.user_face +  this.$store.state.userid +'.jpg'
	      }else{
	        return _vue.user_face +'user_define.jpg'
	      }
			},
			is_hasface(){

				},
	    get_noface(){
	      let _vue=this
	      return _vue.user_face +'user_define.jpg'
	    },
		},
		mounted(){
			
			
		}

	};

</script>

	<style scoped>
		.userbgi
		{
			position: relative;
			margin-top: -50px;
			height: 230px;
			background-image: url('http://localhost/xiaoxianyu/image/backgroup/userbgi2.jpg');	
			background-position: top;
			background-size: cover;
			overflow: hidden;
			z-index: -2;
		}
		.user_info{
			position: absolute;
			left: 20px;
			bottom: 10px;
		}
		.userface{
			display: inline-block;
			height:64px;
      width:64px;
      border-radius:32px;
      border:3px solid #ffffff;
			overflow: hidden;
		}
		.userface	img{
			height: 100%;
			width: 100%;
		}
		.user_text{
			padding-left: 10px;
		}
		.user_name{
			color: rgb(255,255,255);
			font-size: 20px;
			font-family: 'Wawati SC';
		}
		.user_sign{
			color: rgb(234, 232, 238);
			font-family: 'Wawati SC';
		}
		.bgi_filter{
			height:100%;
			width:100%;
			position:absolute;
			z-index:-9;
			background: -webkit-linear-gradient(bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,.0) 40%);
			background: -o-linear-gradient(bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,.0) 40%);
			background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,.0) 40%);
			}
		.user_fun_list{
			border-top: none;
			border-top-right-radius:0; 
			border-top-left-radius:0;
		}
		.mysign{
			border:none;
			background-color: rgba(0,0,0,0);
			width: 100%;
		}

		
	</style>

