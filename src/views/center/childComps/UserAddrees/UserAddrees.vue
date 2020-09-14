	<template>
		<div>
			<div class="col-md-7">
				<div class="well">
					<div>
						<div>
							我的地址
							<hr>
						</div>
						<span class="m_title">新增收货地址</span>
						<div>
							<div class="form-horizontal ">
								<div class="form-group form-inline">
							    <label for="receiver" class="col-sm-2 control-label">收货人：</label>
							    <div class="col-sm-10">
							      <input type="email" class="form-control" id="receiver" v-model='receiver' placeholder="收货人姓名">
							    </div>
							  </div>
							  <div class="form-group form-inline">
							    <label for="area_postcode" class="col-sm-2 control-label">邮政编码：</label>
							    <div class="col-sm-10">
							      <input type="email" class="form-control" id="area_postcode" v-model='area_postcode' placeholder="邮政编码">
							    </div>
							  </div>
							  <div class="form-group">
							    <label for="telephone" class="col-sm-2 control-label">手机号码：</label>
							    <div class="col-sm-4">
							      <select class="form-control">
										  <option>中国大陆+86</option>
										</select>
							    </div>
							    <div class="col-sm-4">
							    	<input type="text" class="form-control" id="telephone" v-model='telephone' placeholder="电话号码">
							    </div>
							  </div>
							   <!-- 选择地区 -->
							   <air-select @updateProvince='updateProvince' @updateCity='updateCity'></air-select>
							  <div class="form-group ">
							    <label for="addreesDetal" class="col-sm-2 control-label">详细地址：</label>
							    <div class="col-sm-10">
							      <textarea class="form-control" rows="2" id="addreesDetal" v-model='addreesDetal'
								      placeholder="请输入详细地址信息，如道路、门牌号、小区、楼栋号、单元等信息">
								    </textarea>
							    </div>
							    <div class="col-sm-offset-2 col-sm-10">
							      <span class="help-block tis" v-if='is_empty'>
							      	收件人、收件人电话、收件人详细地址为重要信息,不能为空
							      </span>
							      <span class="help-block tis" v-if='is_cooling'>
							      	保存成功
							      </span>
							    </div>
							  </div>
<!-- 							  <div class="form-group">
							    <div class="col-sm-offset-2 col-sm-10">
							      <div class="checkbox">
							        <label>
							          <input type="checkbox">设置为默认地址
							        </label>
							      </div>
							    </div>
							  </div> -->
							  <div class="form-group">
							    <div class="col-sm-offset-2 col-sm-10">
							      <button class="btn btn-info" :disabled='is_cooling' @click='submitinfo()'>保存</button>
							    </div>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 已经保存的地址 -->
			<div class="col-md-12">
				<div class="well well-sm ">
					已存储的{{addreesNumber}}条地址，还能保存{{addreesCankeep}}条地址
				</div>
			</div>
			<div class="col-md-12">
				<div class="well well-sm">
					<table>
						<thead>
							<tr>
								<td>收货人</td>
								<td>所在地区</td>
								<td>详细地址</td>
								<td>邮编</td>
								<td>电话/手机</td>
								<td colspan="2">操作</td>
								<td>默认</td>
							</tr>
						</thead>
						<tbody>
							<tr v-for='item in user_addrees_list'>
								<td>{{item.recier}}</td>
								<td>{{item.area}}</td>
								<td>{{item.addreesdetal}}</td>
								<td>{{item.post}}</td>
								<td>{{item.tel}}</td>
								<td>修改</td><td>删除</td>
								<td v-if='item.default==1'>默认地址</td>
								<td v-else><button class="btn btn-sm btn-danger">设为默认</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			
		</div>
	</template>

	<script>
		import AirSelect from '@/views/center/childComps/AirSelect/AirSelect'
		import {get_user_addrees} from '@/network/porfiler.js'
		import {add_receiver_addrees} from '@/network/porfiler.js'
		export default{
		name:'UserAddrees',
		  components: {
		  	AirSelect
		  },
			data(){
				return{
					user_addrees_list:[],
					receiver:"",
					telephone:"",
					area_postcode:"",
					area_Province:"",
					area:"",
					addreesDetal:"",
					is_cooling:false,
					is_empty:0,
					is_sussece:0,
				}
			},
			methods:{
				updateProvince(data){
					this.area_Province=data
					this.area=data
				},
				updateCity(data){
					this.area=this.area_Province+' '+data
				},
				cooling(){
					this.is_cooling=1,
					setTimeout(()=>this.is_cooling=false,3000);
				},
				submitinfo(){
					if(this.receiver==''||this.telephone==''||this.area==''||this.addreesDetal==''){
						let arr=[this.receiver,this.area_postcode,this.telephone,this.area,this.addreesDetal]
						console.log(arr)
						this.is_empty=1
					}
					else{
						if(this.area_postcode==''){
							this.area_postcode='000000'
						}this.is_empty=0;
						this.cooling();
						add_receiver_addrees(this.receiver,this.area_postcode,this.telephone,this.area,this.addreesDetal).then(res=>{
							get_user_addrees().then(
								res=>{
									this.user_addrees_list=res
								}
								)
						}
							)
						}
					
				}
			},
			computed:{
				addreesNumber(){
					return this.user_addrees_list.length;
				},
				addreesCankeep(){
					return 15-this.user_addrees_list.length;
				}

			},
			created(){
				get_user_addrees().then(
					res=>{
						this.user_addrees_list=res
					}
					)
			}

		};
	</script>

<style scoped>
hr{
	margin-top: 5px;
	margin-bottom: 5px;
}
.m_title{
	color: rgb(255, 68, 1);
	display: block;
}
.tis{
	color:red;
}
table{
	border:1px solid #e9e9e9;
	border-collapse:collapse;
	border-spacing:0;
	width:100%;
}
th,td{
	padding:8px 16px;
	border:1px solid #e9e9e9;
	text-align:left;
}
th{
	backgroung-color:#f7f7f7;
	color:#5c6b77;
	font-weight:600;
}
thead tr th{
	backgroung-color:#e9e9e9;
}
</style>

