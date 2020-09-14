<template>
	<div>
		<hr>
		<router-link v-for ="item in  books_list" class='newbook_link'
		:to="{path:'/shopinfo',query:{goodsid:item.bookid}}">
			<div class="col-xs-9">
				{{item.title}}
			</div>
			<div class="col-xs-3 price_button">
				<button class="btn btn-success btn-block btn-xs">￥{{item.price}}</button>
			</div>
			<div class="col-xs-12">
				<hr>
			</div>
		</router-link>
		
	</div>
</template>

<script>
import {get_newbook} from '@/network/home.js'
	export default{
	name:'NewBook',
	  components: {

	  },
		data(){
			return{
				books_list:''
			}
		},
		created(){
			get_newbook().then(
				res=>{
					this.books_list=res;
				})
		}

	};
</script>

<style scoped>
hr{
	margin:5px;
}
.price_button{
	padding:0px;
}
.newbook_link{

}
.newbook_link:hover{
	color:green;
}
</style>

