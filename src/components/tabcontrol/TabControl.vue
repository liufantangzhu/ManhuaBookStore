	<template>
		<div class="tab-control">
			<div v-for='(item,index) in titles' class="tab-control-item"
			 :class='{active:index===currentIndex}'
			  @click='itemclick(index)'>
				<span>{{item}}</span>
			</div>
		</div>
	</template>

	<script>
		export default{
		name:'TabControl',
		props:{
			titles:{
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
					currentIndex:0
				}
			},
			methods:{
				itemclick(index){
					this.currentIndex=index;
					this.$emit('tabClick',index);
				}
			}

		};
	</script>

	<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		line-height:36px;
		height: 36px;
		font-size: 14px;
		border-bottom: solid rgb(218, 218, 218); 
	}
	.tab-control-item{
		flex: 1;
	}
	.tab-control-item span{
		padding: 5px;
	}
	.active{
		color:rgb(255, 96, 0);
		border-bottom: solid rgb(255, 96, 0); 
		margin-bottom: -3px;
	}
	</style>

