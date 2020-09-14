<template>
	<Header>
		<Hitem>
			<li :class="{'active':navbarstatus==1}" @click='changestate(1)'>
				<router-link :to="'/home'" ><span class="glyphicon glyphicon-home">首页</span></router-link>
			</li>
			<li :class="{'active':navbarstatus==2}" @click='changestate(2)'>
				<router-link :to="'/music'" ><span class="glyphicon glyphicon-music">播放器</span></router-link>
			</li>
			<li :class="{'active':navbarstatus==3}" @click='changestate(3)'>
				<router-link :to="'/shop'" ><span class="glyphicon glyphicon-gift">商城</span></router-link>
			</li>			
			<li :class="{'active':navbarstatus==4}" @click='changestate(4)'>
				<router-link :to="'/cart'"><span class="glyphicon glyphicon-shopping-cart">购物车</span></router-link>
			</li>
			<li :class="{'active':navbarstatus==5}" @click='changestate(5)' v-if="!getloginstate">
				<router-link :to="'/register'"><span class="glyphicon  glyphicon-user">登录注册</span></router-link>
			</li>
			<li :class="{'active':navbarstatus==5}" @click='changestate(5)' v-else>
				<router-link :to="'/porfiler'"><span class="glyphicon  glyphicon-user">个人中心</span></router-link>
			</li>
			

		</Hitem>
	</header>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from '../Header/header.vue'
import Hitem from '../Header/header_item.vue'
export default {
  name: 'MainHead',
  components:{
  	Header,Hitem
  },
  data(){
  	return{
  		navbarstatus:0,
  		islogin:''
  	}
  },
  methods:{
		changestate(status){
			this.navbarstatus=status;
		}
	},
	computed:{
		getloginstate(){
			return this.$store.state.islogin
		}
		
	}
}
</script>
