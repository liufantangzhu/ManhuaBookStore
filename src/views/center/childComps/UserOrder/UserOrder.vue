<template>
	<div>
		<div class="col-md-12">
			<div class="well">
				<tab-control :titles="['所有订单','待付款','待发货','待收货','待处理']"
		       class='tab-control'
		      @tabClick='tabClick'
		       >
		    </tab-control>
		    <div>
		    	<br>
		    	<table>
		    		<thead>
		    			<tr>
		    				<td></td>
		    				<td>宝贝</td>
		    				<td>单价</td>
		    				<td>数量</td>
		    				<td>实付款</td>
		    				<td>交易状态</td>
		    				<td><span class="glyphicon glyphicon-trash"></span></td>
		    			</tr>
		    		</thead>
		    		<tbody v-if='this.list.length==0'>
		    			<tr><td colspan="7" class='text-center'>该目录下还空空如也</td></tr>
		    		</tbody>
		    		<tbody v-for='item in list' v-else>
		    			<tr>
		    				<td>{{item.creat_time}}</td>
		    				<td colspan="6">订单号:{{item.order_id}}</td>
		    			</tr>
		    			<tr>
		    				<td>
									<img :src="getimgurl(item.goodsid)" alt="" class="orderimg">
		    				</td>
		    				<td>{{item.goods_title}}</td>
		    				<td class="price">￥{{item.goods_price}}</td>
		    				<td>{{item.goods_num}}</td>
		    				<td class="price">￥{{item.sum_price}}</td>
		    				<td>
		    					<div class='text-center'>{{getstatus(item.status)}}</div>
									<div v-if='item.status==1'>
										<div><button class="btn btn-xs btn-success btn-block" disabled>付款</button></div>				
									</div>
									<div v-if='item.status==2'>
										<button class="btn btn-xs btn-danger btn-block">提醒发货</button>
									</div>
									<div v-if='item.status==3'>
										<button class="btn btn-xs btn-danger btn-block">签收</button>
									</div>
		    				</td>
		    				<td><button class="btn btn-danger btn-xs btn-block"><span class="glyphicon glyphicon-trash"></span></button></td>
		    			</tr>
		    		</tbody>
		    	</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TabControl from '@/components/tabcontrol/TabControl';
	import {get_user_order}from '@/network/porfiler.js'
	export default{
	name:'UserOrder',
	  components: {
	  	TabControl
	  },
		data(){
			return{
				userorder:[],
				unpay:[],
				unsent:[],
				unsign:[],
				dealing:[],
				list:[]

			}
		},
		methods:{
			tabClick(index){
	      switch(index){
	      case 0:
        	this.list=this.userorder;
        break
        case 1:
        	this.list=this.unpay;
        break
        case 2:
        	this.list=this.unsent;
        break
        case 3:
        	this.list=this.unsign;
        break
        case 4:
        	this.list=this.dealing;
        break
	      }
	    },
	    getimgurl(booksid){
				let _vue=this;
	  		//拼接图片地址
	  		return _vue.goods_img_url+booksid+'.jpg'
			},
			getstatus(status){
				if(status==0){
					return '拍下未付款';
				}else if(status==1){
					return '未付款';
				}else if(status==2){
					return '包裹未发出';
				}else if(status==3){
					return '待签收';
				}else if(status==4){
					return '交易完成';
				}else if(status==5){
					return '申请退款中';
				}
			}
		},
		created(){
			get_user_order().then(
				res=>{
					this.userorder=res;
					this.unpay=res.filter((item)=>item.status=='1');
					this.unsent=res.filter((item)=>item.status=='2');
					this.unsign=res.filter((item)=>item.status=='3');
					this.dealing=res.filter((item)=>item.status=='4');
					this.list=this.userorder;
				}
				)
		}

	};
</script>

<style scoped>
	.orderimg{
		width: 100px;
	}
	.price{
		color:rgb(253, 63, 49);
		font-family: 'Microsoft Yahei';
		font-size: 17px;
	}
table{
		width: 100%;
		border:1px solid #e9e9e9;
		border-collapse:collapse;
		border-spacing:0;
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
</style>

