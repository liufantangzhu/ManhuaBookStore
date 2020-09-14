<template>
	   <div class="mybody-out">
      <div class="panel panel-danger mybody2" data-aos="fade-right">
        <div class="panel-heading">

        </div>
        <div class="mypanel-body ">
          <div class="btn-group btn-group-justified" role="group" aria-label="Justified button group">
          	<router-link :to="'/home/hotestdoc'"  class="btn" role="button">
          		热门文章
          	</router-link>
            <router-link :to="'/home/newbook'"  class="btn" role="button">
              新书速递
            </router-link>
            <router-link :to="'/home/userchat'" class="btn" role="button">
            最新评论
            </router-link>
          </div>
            <!--列表-->
            <div class="include">
            	<router-view :rank="rank"></router-view>	
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Rank',
  props:{
    rank:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>
<style scoped>
.mypanel-body{
  padding-top:0px;
}
</style>

