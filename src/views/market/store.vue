<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <search></search>
      </div>
      <div class="col-md-12">
          <!-- 商品管理 -->
          <Shoplist :books="books"></Shoplist> 
      </div>  
    </div>
  </div>
  
</template>

<script>
import Shoplist from './childComps/shoplist'
import Search from './childComps/shop_search'
import {get_books} from '@/network/getbooks.js';
export default {
  name: 'Store',
  components: {
  Shoplist,Search
  },
  data(){
    return {
      books:[]
    }
  },
methods:{

  },
computed:{

  },
created(){
    get_books().then(res=>{
      this.books=res

    }
      );
  }


}
</script>
<style>

</style>
