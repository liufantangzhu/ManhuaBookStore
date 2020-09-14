<template>
  <div id="app">
    <!--滤层-->
    <div class="full-filter"></div>
    <!-- 背景 -->
    <background></background>
    
	<main-head>

	</main-head>
  <keep-alive>
	 <router-view/>
  </keep-alive>
    <side-button></side-button>		
  	<Footer></Footer>  
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MainHead from '@/components/mainhead/Mainhead.vue'
import Footer from '@/components/Footer/footer.vue'
import background from '@/components/background/background.vue'
import sideButton from '@/components/SideFun/sidebutton.vue'
export default {
  name: 'App',
  components: {
    MainHead,Footer,background,
    sideButton
  }
}
</script>

<style>
@import "assets/css/style.css";
</style>

