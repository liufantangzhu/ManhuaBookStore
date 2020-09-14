<template>
  <div class="container">
    <div class="row" :key='docid'>
      <div class="col-md-7">

        <!-- 文章信息 -->
        <info-detail :docid='docid' :docinfo='docinfo'></info-detail>

          
      </div>
      <div class="col-md-4">
        
        <!-- 发表评论 -->
        <doc-comment  :commentlist="commentlist" @RegetCommentList='RegetCommentList'></doc-comment>
        
      </div>
    </div>
    <!-- <shop-cart></shop-cart>
    <eval></eval> -->
  </div>  
</template>

<script>
import InfoDetail from './childComps/info_details';
import DocComment from './childComps/info_comment';


import Eval from './childComps/eval';

import {get_doc_info} from '@/network/doc_info.js';
import {get_doc_comment} from '@/network/doc_info.js';


export default {
  name: 'Docinfo',
  components: {
    InfoDetail,DocComment,Eval
  },
  data(){
    return {
      docid:this.$route.query.docid,
      docinfo:{},
      commentlist:[]
    }
  },
methods:{
  RegetCommentList(){
    get_doc_comment(this.docid).then(res=>{
      return this.commentlist=res
    });
  },
  gotop(){
   document.body.scrollTop=document.documentElement.scrollTop=0;
  }
  },
computed:{
  
  },
created(){
  
  },
activated(){
  this.docid=this.$route.query.docid;
  get_doc_info(this.docid).then(res=>{
      return this.docinfo=res
    });
  get_doc_comment(this.docid).then(res=>{
      return this.commentlist=res
    });
  this.gotop()


}


}
</script>
<style>

</style>
