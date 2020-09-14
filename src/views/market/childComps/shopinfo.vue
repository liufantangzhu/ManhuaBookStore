	<template>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1 class="page_title">商城/商品详情</h1>
				</div>
				<div class="well mybody2">
					
					<!-- 商品图片 -->
					<div class="col-xs-12 col-md-3 marginnone paddingnone">
						<a href="" class="thumbnail">
							<img :src="getimgurl(goodsid)" alt="">
						</a>						
					</div>
					<!-- 右侧操作 -->
					<div class="col-xs-12 col-md-9">
						<span class="marginnone paddingnone books_title">{{books_info.books_title}}</span>
						<hr>
						<!-- 单价 -->
						<div class="col-xs-12 col-md-6 marginnone paddingnone">
							<table>
								<tr>
									<td>单价：</td>
									<td class="price">￥{{books_info.books_price}}</td>
								</tr>
							</table>
						</div>
						<!-- 数量 -->
						<div class="col-xs-12 col-md-6 marginnone paddingnone">
							<table>
								<tr>
									<td>数量：</td>
									<td>
									<div class="input-group">
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
								</tr>
							</table>
						</div>
						<!-- 合计 -->
						<div class="col-xs-12 " ><hr>
							<div class="col-xs-8 col-md-6"></div>
							<div class="col-xs-4 col-md-6 marginnone paddingnone">
								<table>
								<tr>
									<td>合计：</td>
									<td class="price">￥{{sum}}</td>
								</tr>
							</table>
							</div>
						</div><br>
						<!-- 提交按钮 -->
						<div class="col-xs-12 col-md-12 marginnone paddingnone">
							<hr>
							<div class="text-center" style="margin:auto;">
								<div>
									<button class="btn btn-success col-xs-4 col-md-3" @click='confirm'>立即购买</button>
								</div>
								<div class="col-xs-4 col-md-3"></div>
								<div>
									<button class="btn btn-danger col-xs-4 col-md-3 add_item" @click='addCart()'>
										加入购物车
									</button>
								</div>
								<br><hr>

							</div>
						</div>
						<div class="col-xs-12 col-md-12">

							<div class="col-xs-6 col-md-3"><h5>服务承诺:</h5></div>
							<div class="col-xs-6 col-md-3"><h5>正品保证</h5></div>
							<div class="col-xs-6 col-md-3"><h5>极速退款</h5></div>
							<div class="col-xs-6 col-md-3"><h5>七天退换</h5></div>
						</div>	
					</div>

					<div class="well mybody3">
						<!-- 提示信息 -->
						<div class="well well-sm text-center" v-if='login_tis'>
							<span class="warning"><strong>当前未登录</strong></span>
						</div>
						<!-- 提示信息 -->
						<div class="well well-sm text-center" v-if='success_tis'>
							<span class="warning"><strong>添加成功</strong></span>
						</div>
						<div class="alert alert-success" role="alert">
						  <h5>配送范围:汕头、云浮、汕尾、揭阳、中山、珠海、东莞、梅州、茂名、清远、广州、
								湛江、惠州、深圳、佛山、阳江、河源、肇庆、韶关、江门、潮州地区</h5>
						</div>
						<div class="alert alert-warning" role="alert">
						  <p>{{books_info.books_description}}</p>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</template>

	<script>
	import {get_goods} from '@/network/goodsinfo.js'
	import {add_cart} from '@/network/shop_cart.js'
		export default{
		name:'ShopInfo',
		  components: {

		  },
			data(){
				return{
					goodsid:String,
					books_info:[],
					goods_number:1,
					is_login:'',
					login_tis:'',
					success_tis:''

				}
			},
			computed:{
				sum(){
					let totalprice =0;
					if (this.goods_number==0) {
						this.goods_number=1
					}
					totalprice= this.goods_number*this.books_info.books_price;
					return totalprice
				},
				getloginstate(){
		      return this.is_login=this.$store.state.islogin;
		    },
			},
			methods:{
				getimgurl:function(booksid){
					let _vue=this;
		  		//拼接图片地址
		  		return _vue.goods_img_url+booksid+'.jpg'
		  	},
		  	increment(){//数量加
					this.goods_number++
				},
				decrement(){//数量减
					this.goods_number--
				},
				addCart(){//加购物车
					if(this.$store.state.islogin){
						add_cart(this.goodsid,this.goods_number).then(
							res=>{
								if(res.status==1){
									this.success_tis=1;this.message_fade();
								}
							}

							)		
					}else{
						this.login_tis=1;
						this.message_fade();
					}
				},
				message_fade(){
					setTimeout(
            ()=>{
              this.login_tis=0;this.success_tis=0;
              },2000
            )
				},
				confirm(){
					this.$router.push({path:"/orderconfirm",
						query:{goods_id:this.goodsid,number:this.goods_number}});
				}
				
			},
			activated(){
			  this.goodsid=this.$route.query.goodsid;
			  this.goods_number=1;
			  get_goods(this.goodsid).then(
			  	res=>{
			      this.books_info=res
			    }
			  	)
			}

		};
	</script>

	<style scoped>
		.goods_number{
		min-width:200px;
		}
		.page_title{
			color:rgb(119, 119, 119);
		}
		.books_title{
			font-size: 2.5rem
		}
		.price{
			color:rgb(253, 63, 49);
		}
		.warning{
			color: #D9534F;
		}
		
	</style>

