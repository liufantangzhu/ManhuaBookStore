	<template>
		<div>
			<div class="col-md-8">
				<div class="well">
					<strong>编辑个人信息</strong>
					<hr>
					<div class="form-horizontal">
						<div class="form-group">
					    <label for="user_name" class="col-sm-2 control-label">昵称：</label>
					    <div class="col-sm-10">
					      <input type="email" class="form-control" v-model.lazy="user_name" placeholder="用户名">
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
					      <button type="submit" class="btn btn-info btn-block" @click="submitinfo">保存</button>
					    </div>
					    <div class="col-sm-5">
					    	<button class="btn btn-block">重置</button>
					    </div>
					    <div class="col-sm-offset-2 col-sm-5">
					      <span class="help-block tis" v-if='is_empty'>昵称、所在地区、不能为空</span>
					    </div>
					  </div>
					  
						
					</div>

				</div>
				
			</div>
			<div class="col-md-3">
				<div class="well col-md-12 text-center">
						<label for="upload_img" class="control-label">
							<div class="edit_img">
								<img :src="get_userface"  alt="用户头像" class="img-thumbnail ">
								<div class="img_info">
									<span>点击更改头像</span>
								</div>
							</div>
							
						</label>
						<br>
						<br>
						<input id='upload_img' type="file" accept="image/*" @change="" style="display:none">
						<button class="btn btn-warning btn-block" @click='changeImage()'>修改头像</button>

				</div>
			</div>

		</div>
	</template>

	<script>
	import AirSelect from '@/views/center/childComps/AirSelect/AirSelect'
	import {updata_user_info} from "@/network/porfiler.js"
	import {upload_user_face} from "@/network/porfiler.js"
		export default{
		name:'EditProfile',
		  components: {
		  	AirSelect
		  },
			data(){
				return{
					user_name:"",
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
					if(this.user_name==''||this.user_area==''||this.user_sign==''){
						this.is_empty=1
					}else{
						updata_user_info(this.user_name,this.user_sex,this.user_area,this.user_sign,this.user_birthday).then(res=>{
							let userinfo={};
							userinfo.username=this.user_name;
							userinfo.usersex=this.user_sex;
							userinfo.userarea=this.user_area;
							userinfo.usersign=this.user_sign;
							this.is_empty=0
							this.$store.commit({
	              type:'change_user_info',
	              userinfo
	            })
						}
							
							)
						}
					
				},
				changeImage(){
					let imgFile=document.querySelector('#upload_img').files[0];
					let params = new FormData();
					 params.append('file',imgFile,imgFile.name);
					console.log(params.get('file'));

					upload_user_face(params).then(res=>{
						console.log(res);
					})
				}
			},
			computed:{
				get_user_day(){
					return this.user_birthday= this.user_year+this.user_month+this.user_day
				},
				get_userface(){
					let _vue=this;
		      if(this.$store.state.hasface==1){
		        return _vue.user_face +  this.$store.state.userid +'.jpg'
		      }else{
		        return _vue.user_face +'user_define.jpg'
		      }
				}
			},
			created(){

			}

		};
		
	</script>

	<style scoped>
	hr{
		margin-top:5px;
	}
	.tis{
		color:red;
	}
	.edit_img{
		position:relative;
		overflow: hidden;
	}
	.edit_img:hover .img_info{
	visibility: visible;
  opacity: 1;
  bottom:0;
}
.img_info{
  position:absolute;
  bottom: -40px;
  height:100%;
	width:100%;
	padding:5px;
	background: linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 100%);
	pointer-events: none;
	font-size: 110%;
	
	display:block;
	z-index: 2;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0s,bottom .5s, opacity 0.5s ease-in-out;
}
.img_info span{
		position: relative;
    color: rgba(255,255,255,1);
    font-size: 20px;
    text-align: left;
    padding: 0;
    margin:0;
    top:45%;
	}
	</style>

