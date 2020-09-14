<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="col-md-12 well well-sm mybody3">
					<div class="col-md-4 text-center paddingnone">
			      <div class=" well o-out">
				      <h2 class="marginnone well o-out bordernone">
				        <span class="well mybody3 pleft"><strong>小咸鱼</strong></span>
				        <span class="well oringe bordernone"><strong>网上书店</strong></span>
				      </h2>
				    </div>
			    </div>
			    <div class="page-header">
						<h1>欢迎注册<small> Register page</small></h1>
					</div>
				</div>
				<div class="col-md-7 well mybody2">
					<div>
					<h2><strong>欢迎注册</strong></h2>
					<hr>
					<div class="form-horizontal">
						<div class="form-group form-inline">
					    <label for="user_name" class="col-sm-2 control-label">账号：</label>
					    <div class="col-sm-10">
					      <input type="" class="form-control"
					       v-model.lazy="user_account" placeholder="注册账号"
								 oninput = "value=value.replace(/[^\d]/g,'')"
					       >
					    </div>
					  </div>
					  <div class="form-group form-inline">
					    <label for="user_name" class="col-sm-2 control-label">密码：</label>
					    <div class="col-sm-10">
					      <input type="password" class="form-control"
					       v-model.lazy="user_password" placeholder="用户密码"
								 oninput = "value=value.replace(/[^\a-\z\A-\Z0-9]/g,'')"
					       >
					    </div>
					  </div>
						<div class="form-group form-inline">
					    <label for="user_name" class="col-sm-2 control-label">昵称：</label>
					    <div class="col-sm-10">
					      <input type="email" class="form-control"
					       v-model.lazy="user_name" placeholder="用户昵称"
									oninput="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g,'') "onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g,''))"
					       >
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="inputPassword3" class="col-sm-2 control-label">介绍：</label>
					    <div class="col-sm-10">
					      <textarea class="form-control" rows="3" placeholder="写下用来彰显个性的语句吧" v-model.lazy="user_sign"></textarea>
					      
					    </div>
					  </div>
					  <div class="form-group">
					  	<label for="inputPassword3" class="col-sm-2 control-label">性别：</label>
					  	<div class="col-sm-10">
					  		<label class="radio-inline">
								  <input type="radio" name="inlineRadioOptions" id="Radio3" value="保密" v-model='user_sex'> 保密
								</label>
					      <label class="radio-inline">
								  <input type="radio" name="inlineRadioOptions" id="Radio1" value="男" v-model='user_sex'> 男
								</label>
								<label class="radio-inline">
								  <input type="radio" name="inlineRadioOptions" id="Radio2" value="女" v-model='user_sex'> 女
								</label>
								
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="inputPassword3" class="col-sm-2 control-label">生日：</label>
					    <div class="col-sm-3">
					      <select class="form-control" v-model='user_year'>
								  <option value="1991年">1991年</option>
								  <option value="1992年">1992年</option>
								  <option value="1993年">1993年</option>
								  <option value="1994年">1994年</option>
								  <option value="1995年">1995年</option>
								</select>
					    </div>
					    <div class="col-sm-2">
					      <select class="form-control" v-model='user_month'>
								  <option value="1月">1月</option>
								  <option value="2月">2月</option>
								  <option value="3月">3月</option>
								  <option value="4月">4月</option>
								  <option value="5月">5月</option>
								  <option value="6月">6月</option>
								  <option value="7月">7月</option>
								  <option value="8月">8月</option>
								  <option value="9月">9月</option>
								  <option value="10月">10月</option>
								  <option value="11月">11月</option>
								  <option value="12月">12月</option>
								</select>
					    </div>
					    <div class="col-sm-2">
					      <select class="form-control">
								  <option value="1">1日</option>
								</select>
					    </div>
					  </div>
					  <!-- 选择地区 -->
					  <air-select @updateProvince='updateProvince' @updateCity='updateCity'></air-select>
						<div class="form-group">
					    <div class="col-sm-offset-2 col-sm-5">
					      <button type="submit" class="btn btn-info btn-block" @click="submitinfo">注册</button>
					    </div>
					    <div class="col-sm-5">
					    	<button class="btn btn-block">清空</button>
					    </div>
					    <div class="col-sm-offset-2 col-sm-5">
					      <span class="help-block tis" v-if='is_empty'>昵称、所在地区、不能为空</span>
					    </div>
					  </div>
					</div>

				</div>
				</div>
			
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import AirSelect from '@/views/center/childComps/AirSelect/AirSelect'
	import {user_register} from '@/network/register.js'
	import {login} from '@/network/home.js';
	export default{
	name:'Register',
	  components: {
	  	AirSelect
	  },
		data(){
			return{
				user_name:"",
				user_account:"",
				user_password:"",
				user_sign:"",
				user_sex:"保密",
				user_birthday:"",
				user_year:"1991年",
				user_month:"1月",
				user_day:"1日",
				user_Province:"",
				user_area:"",
				is_empty:0
			}
		},
		methods:{
			updateProvince(data){
					this.user_Province=data
					this.user_area=data
				},
			updateCity(data){
				this.user_area=this.user_Province+' '+data
			},
			submitinfo(){
				if(this.user_account==''||this.user_name==''||this.user_area==''||this.user_sign==''||this.user_password==''){
					this.is_empty=1
				}else{
					console.log(this.user_sign);
					user_register(this.user_account,this.user_password,this.user_name,this.user_sex,this.user_area,this.user_birthday,this.user_sign).then(res=>{
						let userinfo={};
						userinfo.useraccount=this.user_account;
						userinfo.userpassword=this.user_password
						userinfo.username=this.user_name;
						userinfo.usersex=this.user_sex;
						userinfo.userarea=this.user_area;
						userinfo.usersign=this.user_sign;
						this.is_empty=0;
						login(this.user_account,this.user_password).then(res=>{
		          if(res){
		            this.islogin=1;           
		            this.$store.commit({
		              type:'change_logstate',
		              res
		            })
		            this.to_home();
		          }else{

		          }
		        })
						
					}
						
						)
				
					}
			
			},
			to_home(){
				this.$router.push("/porfiler");	
			}
		},
	computed:{
		get_user_day(){
			return this.user_birthday= this.user_year+this.user_month+this.user_day
		},
		
	}

	};
</script>

<style scoped>
	.oringe {
    background-color:rgba(247, 151, 30,1);
    color:rgba(0,0,0,1);
     padding:7px;
  }
  .blank{
    padding:9px;
  }
  .pleft{
    padding:7px;
  }
  .o-out{
    background-color:rgba(0,0,0,1);
    color:rgba(255,255,255,1);
    padding:15px;
    margin:0px;
  }
  .bordernone{
    border:0px;
  }
</style>

