<template>
	<div>
		<!--漂浮栏-->
	  <div class="rocket">
	    <ul>
	      <li class="rock" @click="gotop();"><span class="glyphicon glyphicon-chevron-up"></span></li>
	      <li class="rock" @click="goback();">
	      	<span class="glyphicon glyphicon-chevron-left"></span>
	      </li>
	    </ul>
	  </div>
		</div>
	</div>
</template>

<script>
	export default{
	name:'sideButton',
	  components: {

	  },
	  methods:{
	  	gotop(){
	  		 $('body,html').animate({scrollTop:0},'777');
	  	},
	  	goback(){
	  		this.$router.go(-1);
	  	}
	  },
		data(){
			return{

			}
		}

	};
</script>

<style scoped>
.rocket {
  height: 45px;
  width: 45px;
  position:fixed;
  right: 30px;
  bottom:110px;
  background-color:none;
  display:block;
  z-index: 99;
}
.rocket ul li {
  float: right;
  width:38px;
  height: 38px;
  list-style: none;
  line-height:32px;
  text-align: center;
  border: 2px solid;
  color: #ffffff;
  border-radius:2px;
}
.rocket ul li:active{
  background-color:rgba(255,255,255,0.8);
  color: black;
  border: 2px solid;
  border-color: rgba(201, 48, 44,0.9);
  
}

.rock {
    height:40px;
    width: 40px;
    margin: auto;
    margin-top:5px; 
    background-color:rgba(72,72,72,0.5); 
}
</style>

