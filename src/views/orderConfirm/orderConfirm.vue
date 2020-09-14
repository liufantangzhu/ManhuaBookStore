<template>
	<div>
		<div class="container">
			<div class="row">

				<div class='col-md-12 well well-sm'>
					选择收货地址
				</div>
				<div class="col-md-6 col-md-offset-3 text-center well well-sm addreesMessage"
				 v-if='user_addrees_list.length==0'>
					<div>不会吧，不会吧，你怎么连个地址都没有</div>
					<div>立刻去
						<router-link :to="'/porfiler/useraddrees'">
					 		<button class="btn btn-danger btn-sm">添加地址</button>
					 	</router-link>
					</div>
						
					
				</div>
				<div v-for='(item,index) in user_addrees_list'>
					<label class="col-md-3" :for="item.addrees_id" @click='getFullAddrees(index)'>
						<div class="well well-sm addreesMessage" 
						:class='{"actived":item.addrees_id==addrees_id}'>
							{{item.area}} ({{item.recier}})
							<hr class="myhr">
							<div class="addreesdetal">
								{{item.addreesdetal}}
								<div>电话：{{item.tel}}</div>
							</div>
						</div>  
					</label>
					<input type="radio" class="addreesSelect" :id='item.addrees_id' name="addreesSelect" 
					:value="item.addrees_id" v-model='addrees_id'> 
				</div>
				<div class='col-md-12 well well-sm'>
					确认订单信息
				</div>				
			</div>
			<div class="well well-sm">
					<table>
		    		<thead>
		    			<tr>
		    				<td></td>
		    				<td>宝贝</td>
		    				<td>单价</td>
		    				<td>数量</td>
		    				<td>小计</td>
		    				<td>操作</td>
		    			</tr>
		    		</thead>
		    		<tbody>
		    			<tr>
		    				<td><img :src="getimgurl(goodsid)" alt="" class="orderimg"></td>
		    				<td>{{books_info.books_title}}</td>
		    				<td class='price'>￥{{books_info.books_price}}</td>
		    				<td><div class="input-group">
										<span class="input-group-btn">
											<!-- 减号 -->
											<button class="btn btn-default" type="button"
											@click='decrement()' 
											v-bind:disabled="this.goods_number<=1">
												<span class="glyphicon glyphicon-minus"></span>
											</button>
										</span>
										<input id="number" type="text" size="3" maxlength="3"  
										class="text-center form-control paddingnone" 
										v-model='goods_number'
										>
										<span class="input-group-btn" >
											<!-- 加号 -->
											<button class="btn btn-default" type="button"
											@click='increment()'>
												<span class="glyphicon glyphicon-plus"></span>
											</button>
										</span>
									</div>
								</td>
		    				<td class='price'>￥{{goods_number*books_info.books_price}}</td>
		    				<td><button class="btn btn-danger btn-sm btn-block" disabled><span class="glyphicon glyphicon-trash"></span></button></td>
		    			</tr>
		    		</tbody>
		    	</table>
				</div>
				<div class="row" v-if='is_success'>
					<div class="col-md-12 paddingnone">
						<div class="well well-sm text-center">
							<span class="tis">提交成功</span>
						</div>
					</div>
				</div>
				
				<div class="col-md-4 col-md-offset-8 submit-outest paddingnone">
					<div class="well well-sm  submitout">
						<div class="text-right ">实付款：<span class="price">
							￥{{goods_number*books_info.books_price}}</span></div>
						<div>寄送至：{{fullAddrees}}</div>
						<div>电话：{{tel}}</div>
						<div>收件人：{{recier}}</div>
						<div class="text-right">
							<button class='btn btn-danger btn-block submitbutton'
							 :disabled="addrees_id==''" @click='sumitOrder' >
								提交订单
							</button>
						</div>
					</div>					
				</div>
				
				
		</div>
		
	</div>
</template>

<script>
import {get_goods} from '@/network/goodsinfo.js'
import {get_user_addrees} from '@/network/porfiler.js'
import {add_order} from '@/network/market.js'
	export default{
	name:'OrderConfirm',
	  components: {

	  },
		data(){
			return{
				user_addrees_list:[],
				addrees_id:'',
				goodsid:String,
				books_info:[],
				goods_number:'',
				fullAddrees:'',
				recier:'',
				tel:'',
				is_success:''
			}
		},
		mounted(){
			get_user_addrees().then(
				res=>{
					this.user_addrees_list=res
					
				}
			)
		},
		computed:{
			
			sum_price(){

			}
		},
		methods:{
			getimgurl:function(booksid){
				let _vue=this;
	  		//拼接图片地址
	  		return _vue.goods_img_url+booksid+'.jpg'
	  	},
	  	getFullAddrees(index){
	  		if(!index){index=0}
				this.fullAddrees=this.user_addrees_list[index].area+this.user_addrees_list[index].addreesdetal
				this.recier=this.user_addrees_list[index].recier
				this.tel=this.user_addrees_list[index].tel
			},
			increment(){//数量加
				this.goods_number++
			},
			decrement(){//数量减
				this.goods_number--
			},
			sumitOrder(){
				add_order(this.goodsid,this.goods_number,this.addrees_id).then(
					res=>{
						if(res.state=='success'){
							this.is_success=1;
							setTimeout(()=>this.is_success=0,3000);
						}
					})
			}
		},
		created(){
			
		},
		activated(){
		  this.goodsid=this.$route.query.goods_id;
		  this.goods_number=this.$route.query.number;
		  get_goods(this.goodsid).then(
		  	res=>{
		      this.books_info=res
		    }
		  )
		}

	};
</script>

<style scoped>
.addreesSelect{
	display: none;
}
.addreesdetal{
	height:60px;
	overflow: hidden;
}
.addreesMessage{
	border:5px solid pink;
}
.actived{
	border:5px solid #F04567;
}
.myhr{
		margin:5px;
	}
.orderimg{
		width: 100px;
	}
.price{
	color:rgb(253, 63, 49);
	font-family: 'Microsoft Yahei';
	font-size: 17px;
}
.submit-outest{
	border:1px solid pink;
	margin-bottom: 50px;
}
.submitout{
	position: relative;
	border-radius: 0px;
	margin-bottom: 0px;
	border:2px solid pink;
}
.submitbutton{
	position: absolute;
	width: 150px;
	bottom: -35px;
	right: -3px;
	border-radius: 0px;

}
table{
	width: 100%;
	border:1px solid #e9e9e9;
	border-collapse:collapse;
	border-spacing:0;
}
th,td{
	padding:8px 16px;
	border:1px solid pink;
	text-align:left;
}
th{
	backgroung-color:#f7f7f7;
	color:#5c6b77;
	font-weight:600;
}
.tis{
	color:#D9534F;
	font-weight:bold;
}
</style>

