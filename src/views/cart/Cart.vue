<template>
  <div class="container">
	  <div class="row">
	  	<!-- 未登录 -->
	  	<div v-if='!getloginstate'>
	  		<div class="col-md-12">
				  <h1 class="page_title">购物车</h1>
			  </div>
				<div class="col-md-10 paddingnone">
					<div class="well mybody2 text-center  cart_empty">
						<div>
							购物车内暂时没有商品，登录后将显示您之前加入的商品
							<hr>
							<button class="btn btn-danger">
								登录
							</button>
							<button class="mybody3">
								<a href="">去购物></a>
							</button>	
						</div>
					</div>
				</div>
	  	</div>
	  	<!-- 已登录 -->
	  	<div class="col-md-12" v-else>
	  		<div class="col-md-12 well mybody2" v-if="this.goodsinfo.length">
	  			<!-- 表头 -->
	  			<div class="col-md-12  text-center MyTablehead">
	  				<div class="col-md-1">
			        <label>
			          <input type="checkbox" @click='allChecked' :checked='is_checkAll'>全选
			        </label>
	  				</div>
		  			<div class="col-md-4 col-md-offset-1 text-left ">商品信息</div>
		  			<div class="col-md-1">单价</div>
		  			<div class="col-md-2">数量</div>
		  			<div class="col-md-2">小计</div>
		  			<div class="col-md-1">操作</div>
	  			</div>
	  			<!-- 分界线 -->
	  			<div class="col-md-12"><hr></div>
	  			<!-- 表循环体 -->
	  			<div class="col-md-12 MyTableBody  text-center well" v-for='(item,index) in goodsinfo'>
	  				<div class="col-md-1">
		  				<label class=" col-xs-1 col-sm-1 text-center">
		  					<input type="checkbox" name="shop_cartlist" class="shopcheck" 
		  						:value="index" v-model='checked_list'>
		  				</label>
		  			</div>
		  			<div class="col-md-1 cart_img">
		  				<img :src="getimgurl(item.goodsid)" alt="">
		  			</div>
		  			<div class="col-md-4 text-left">
		  				<div class="goods_title">
		  					<a href="">
		  						{{item.goodstitle}}
		  					</a>
		  				</div>
		  			</div>
		  			<div class="col-md-1 ">
		  				<div>单价:</div>
		  				<div class="price">￥{{item.goodsprice}}</div>
		  			</div>
		  			<div class="col-md-2">
		  				<div>数量：</div>
								<div class="input-group">
									<span class="input-group-btn">
										<!-- 减号 -->
										<button class="btn btn-default" type="button" 
											@click='decrement(index,item.shopCart_id)'
											:disabled="item.goodsnumber<=1"
										>
											<span class="glyphicon glyphicon-minus"></span>
										</button>
									</span>
									<input id="number" type="text" size="3" maxlength="3"  
									class="text-center form-control paddingnone" :value='item.goodsnumber'
									>
									<span class="input-group-btn" >
										<!-- 加号 -->
										<button class="btn btn-default" type="button"
										@click='increment(index,item.shopCart_id)'>
											<span class="glyphicon glyphicon-plus"></span>
										</button>
									</span>
								</div>
		  			</div>
		  			<div class="col-md-2 text-center">
		  				<div>小计:</div>
		  				<div class="price">￥{{subtotal(index)}}</div>
		  			</div>
		  			<div class="col-md-1">
		  				<button class="btn btn-danger btn-sm" @click="removehandle(index,item.shopCart_id)">移出购物车</button> 
		  			</div>
	  			</div>
	  		</div>
	  		<!-- 购物车为空 -->
	  		<div v-else>
		  		<div class="col-md-12">
					  <h1 class="page_title">购物车</h1>
				  </div>
					<div class="col-md-12 paddingnone">
						<div class="well mybody2 text-center  cart_empty">
							<div>
								购物车内暂时没有商品
								<hr>
							</div>
						</div>
					</div>
		  	</div>
	  	</div>
		  
	  </div>
	  <div class="well well-sm text-center tis" v-if='is_submit'>
	  	不许提交
	  </div>
	  <!-- 结算条 -->
	  <div class="mybody3" v-if='getloginstate'>
	  	<div class="well well-sm marginnone sumbar order_commiter">
				<table>
					<tr>
						<td>
							已选中<span class="sumbar_price">{{item_number}}</span>件商品
						</td> 			
						<td>
							合计：<span class="sumbar_price">￥{{totalprice}}&nbsp</span>	
							<button class="btn btn-danger btn-lg order_commiter"
							 :disabled='!item_number' @click='submit_order'>
								提交定单
							</button>
						</td>
					</tr>
				</table>				
	  	</div>
	  </div>
  	
  </div>
</template>

<script>

import {get_shopcart_info} from '@/network/shop_cart.js'
import {delete_cart} from '@/network/shop_cart.js'
import {changeNumber_cart} from '@/network/shop_cart.js'
export default {
	name:'Cart',
	components:{

	},
	data(){
		return{
			islogin:'',
			goodsinfo:[],
			is_empty:0,
			checked_list:[],
			isCheckedAll: false,
			is_submit:''
		}
	},
	computed:{
		totalprice(){
			let totalprice=0;
			for (let item of this.checked_list){
				totalprice+=this.goodsinfo[item].goodsprice*this.goodsinfo[item].goodsnumber;
			}
			return totalprice
		},
		item_number(){
			return this.checked_list.length;
		},
		is_checkAll(){
			return this.goodsinfo.length===this.checked_list.length
		},
		getloginstate(){
			this.islogin=this.$store.state.islogin
			return this.$store.state.islogin

		}
	},
	methods:{
		getprice(price){
			return '￥'+price.toFixed(2);
		},
		getimgurl(booksid){
			let _vue=this;
  		//拼接图片地址
  		return _vue.goods_img_url+booksid+'.jpg'
		},
		increment(index,id){//加
			this.goodsinfo[index].goodsnumber++;
			changeNumber_cart(id,this.goodsinfo[index].goodsnumber);
		},
		decrement(index,id){//减
			this.goodsinfo[index].goodsnumber--;
			changeNumber_cart(id,this.goodsinfo[index].goodsnumber);
		},
		removehandle(index,id){//移除
			this.goodsinfo.splice(index,1);
			delete_cart(id)
		},
		subtotal(index){
			let subtotal=0;
			subtotal=this.goodsinfo[index].goodsprice*this.goodsinfo[index].goodsnumber;
			return subtotal.toFixed(2)
		},
		allChecked(){
			this.isCheckedAll = !this.isCheckedAll
			if(this.isCheckedAll){
				console.log(this.checked_list);
				this.checked_list=[];
				for(let i=0;i<this.goodsinfo.length;i++){
					this.checked_list.push(i)
				}
			}else{
				this.checked_list=[]
			}
		},
		submit_order(){
			this.is_submit=1;setTimeout(()=>this.is_submit=0,2000);
		}
	},
	created(){

	},
	activated(){
		if(this.islogin){
			get_shopcart_info().then(
				res=>{
					if(res!='empty'){
						this.goodsinfo=res;
						console.log(res);
					}
				}
				)
		}
	}
};
</script>

<style scoped>
.page_title{
			color:rgb(119, 119, 119);
		}
.cart_empty{
	height: 400px;
	display:flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}
.cart_img img{
	width:100%;
}
.price{
	color:rgb(253, 63, 49);
	font-family: 'Microsoft Yahei';
	font-size: 17px;
}
.sumbar{
	padding:  0 0  0 20px;
}
.sumbar_price{
	color:rgb(253, 63, 49);
	font-family: 'Microsoft Yahei';
	font-size: 16px;
}
.goods_title{
	font-family: 'Microsoft Yahei';
	font-size: 16px;
}
.goods_title a{
	color: #000000;
}
.goods_title a:hover{
	color:#D9534F;
}
.order_commiter{
	border-radius: 0 0 0 0;
	margin:-1px;
}
.tis{
	color:#D9534F;
	font-weight:bold;
}
table{
	width: 100%;
	border-collapse:collapse;
	border-spacing:0;
}
th,td:last-child{
	text-align:right;
}
</style>