<template>
  <div class="well mybody2 ">
    <div class="col-md-4 text-center paddingnone">
      <div class=" well o-out">
      <h2 class="marginnone well o-out bordernone">
        <span class="well mybody3 pleft"><strong>小咸鱼</strong></span>
        <span class="well oringe bordernone"><strong>网上书店</strong></span>
      </h2></div>
    </div>
    <div class="col-md-4">
      <div class="well blank mybody3"></div>
    </div>
    <div class="col-md-4 form-group paddingnone">
      <div class="input-group">
        <input type="text" class="form-control search_input" name="search" placeholder="商品搜索"maxlength="20"> 
        <div class="input-group-btn">
        <button type="submit" class="btn btn-danger search">
            <span class="glyphicon glyphicon-search " aria-hidden="true"></span>搜索
        </button>
        </div>
      </div>
    </div>
    <div class="col-md-4 marginnone"></div>
    <div class="col-md-4 col-md-offset-4 form-group marginnone paddingnone">
      <div class="col-xs-3 well marginnone paddingnone">
          假装这里有搜索推荐
      </div>
      <div class="col-xs-3 well marginnone paddingnone">
          假装这里有搜索推荐
      </div>
      <div class="col-xs-3 well marginnone paddingnone">
          假装这里有搜索推荐
      </div>
      <div class="col-xs-3 well marginnone paddingnone">
          假装这里有搜索推荐
      </div>
    </div>     
  </div><!--搜索框结束-->
</template>

<script>
	export default {
  name: 'Search',

};

</script>

<style scoped>
	.oringe {
    background-color:rgba(247, 151, 30,1);
    color:rgba(0,0,0,1);
     padding:7px;
  }
  .blank{
    padding:9px;
  }
  .pleft{
    padding:7px;
  }
  .o-out{
    background-color:rgba(0,0,0,1);
    color:rgba(255,255,255,1);
    padding:15px;
    margin:0px;
  }
  .bordernone{
    border:0px;
  }
</style>