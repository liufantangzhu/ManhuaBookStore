<template>
  <div class="home">
  	<div class="container">
    	<div class="row">
        <div class="col-md-8 ">
          <div class="mybody-out">
            <!-- 公告 -->
            <Notice>
              <p class="text-danger">{{notice1}}</p>
              <p class="text-primary">{{notice2}}</p>
              <p class="text-success"> {{notice3}}</p>
            </Notice>      
            <slot></slot>
          </div>
          <!-- 文章开始 -->
          <div class="left_list">
           <Doc v-for="(item,index) in doc" :docid="item.docid" :key="item.docid" >
             <div slot="doc-title">{{item.title}}</div>
            <span slot="creat_date">{{item.creat_date}}</span>
            <span slot="hot">{{item.hot}}</span>
             <div slot="doc-cont" v-html="item.cont">{{item.cont}}</div>
             <img slot="doc-img" :src='getdocimg(item.docid)'>
           </Doc>
          </div>
          <!-- 页码 -->
          <div class="mybody-out">
            <div class="mybody2 text-center" data-aos="fade-right">
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <!-- 上一页 -->
                  <li v-if='page!=1' @click='prev_page'>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                    
                  <li v-for='item in pagecount' :class="{'ispage':page!=item}">
                    <a @click='changepage(item)' >{{item}}</a>
                  </li>
                  <!-- 下一页 -->
                  <li v-if='page!=pagecount' @click='next_page'>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>

                </ul>
              </nav>
            </div> 
          </div>

        </div>
          <div class="col-md-4"><!--右侧开始-->
            <!-- 搜索框 -->
            <Search></Search>
            
            
            <!-- 小登录面板 -->
            <Minilog></Minilog>
            <!-- 日期 -->
            <div class="mybody-out">
              <div class="well well-sm mybody2" data-aos="fade-left">
                <div class="text-center">
                  <div><span class="green_day">{{getdata}}</span></div>
                </div>
              </div>
            </div>
            <div class="mybody-out">
              <div class="panel panel-danger mybody2" data-aos="fade-left">
                <div class="panel-heading">
                </div>
                <div class="panel-body mypanel-body">
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
          <slot name=0></slot>    
        </div>
      </div>	
  	</div>
  </div>

</template>

<script>

import Notice from './childComps/home_notice'
import Doc from './childComps/home_doc'
import Search from './childComps/search'
import Minilog from './childComps/minilog'

import {get_notice,get_page,get_doc_list} from '@/network/home.js';

export default {
  name: 'Home',
  components: {
    Notice,Doc,Search,Minilog

  },
  data(){
    return {
      page:1,
      pagecount:null,
      notice1:null,
      notice2:null,
      notice3:null,
      doc:[],
      rank:[]
    }
  },
methods:{
  getdocimg:function(docid){
    let _vue =this;
    //拼接图片地址
    return _vue.doc_img_url+docid+'.jpg';
  },
  changepage(page){
    this.page=page;
    get_doc_list(page).then(res=>{
      this.doc=res;
      $('body,html').animate({scrollTop:0},'233');
    })
  },
  prev_page(){
    let prev_page=this.page-1
    get_doc_list(prev_page).then(res=>{
      this.doc=res;
      this.page=prev_page;
    })
  },
  next_page(){
    let next_page=this.page+1
    get_doc_list(next_page).then(res=>{
      this.doc=res;
      this.page=next_page;
    })
  },
  cut_text(text){
    if(text.length>50){
      text=text.slice(1,50);
    }
  }
  

},
computed:{
  getdata(){
    // var d = new Date();
    return new Date().toDateString().split(" ")[1]
  },
},
created(){
  get_notice().then(res=>{
    
    this.notice1=res.notice[0].content;
    this.notice2=res.notice[1].content;
    this.notice3=res.notice[2].content;
    this.doc=res.doc;
    this.rank=res.rank;
  },
    );
  get_page().then(
    res=>{
      let arr=[];
      for(let i =1;i<=res;i++){
        arr.push(i);
      }
      this.pagecount=res;
    }

    );
}


};
</script>
<style>
  .ispage {
    color:red;
  }
  .green_day{
    color:#5CB85C;
    font-size:50px;
/*    font-weight: bold;*/
    font:'微软雅黑',Verdana,Arial,Helvetica,sans-serif;
  }
  .mypanel-body{
    padding-top:0px;
  }
</style>
