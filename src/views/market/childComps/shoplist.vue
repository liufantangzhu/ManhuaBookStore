<template>
	<div class="well mybody2" >
		<router-link v-for ="item in books" 
		:to="{path:'/shopinfo',query:{goodsid:item.bookid}}">
			<div class="well mybody3 shop-info  col-md-2 col-sm-4 col-xs-6">
				<div class="">
					<img :src="getimgurl(item.bookid)">
					<div class="text-info">
						<h4>{{item.title}}</h4>
					</div>
					<div class="shop-price">
						<h3>{{item.price}}</h3><br>
					</div>
					<div class="shell-info">
						
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
  name: 'Shoplist',
  props:{
  	books:{
  		type:Array,
  		default(){
  			return [];
  		}
  	}

  },
  methods:{
  	getimgurl:function(booksid){
  		let _vue=this;
  		//拼接图片地址
  		return _vue.goods_img_url+booksid+'.jpg'
  	}
  },


}

</script>

<style>
	
</style>