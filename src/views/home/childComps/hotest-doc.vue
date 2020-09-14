	<template>
		<div>
			<hr>
			<router-link v-for ="item in  rank" class='newbook_link'
			:to="{path:'/docinfo',query:{docid:item.docid}}">
				<div class="col-xs-9">
					{{item.title}}
				</div>
				<div class="col-xs-3 price_button">
					<button class="btn btn-danger btn-block btn-xs">
						<span class="glyphicon glyphicon-fire"></span>
						{{item.hot}}
					</button>
				</div>
				<div class="col-xs-12">
					<hr>
				</div>
			</router-link>
			
		</div>
	</template>

	<script>
		export default{
		name:'HotestDoc',
		props:{
	  	rank:{
	  		type:Array,
	  		default(){
	  			return []
	  		}
	  	}
	  },
	  components: {

	  },
		data(){
			return{

			}
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
	color:#FD3F31;
}
</style>