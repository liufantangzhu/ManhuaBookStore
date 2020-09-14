<template>
	<div>
    <hr>
    <!--评论列表-->
    <div v-for="item in commentlist" class="commentItem col-xs-12 marginnone">
      <div class="col-xs-1 col-sm-1 col-md-1 paddingnone text-right">
          <img  :src="get_face(item.uid)"  class="user_face" />
      </div >
      <div class="col-xs-11 col-sm-11 col-md-11 paddingnone">
        <router-link :to="{path:'/docinfo',query:{docid:item.doc_id}}">
          <div class="col-xs-11 col-xs-offset-1 well well-sm usercomment">
            {{item.user_comment}}
          </div>
        </router-link>
      </div>
      <div class="col-xs-12 marginnone paddingnone"><hr></div>
    </div>
    <div v-if='!has_comment'>
      <span>暂无评论，快来写下第一发评论吧=͟͟͞͞(꒪⌓꒪*)</span>
    </div>
  </div>
</template>

<script>
import {get_userchat} from '@/network/home.js'
	export default{
	name:'UserChat',
	  components: {
	  	 
	  },
		data(){
			return{
				commentlist:[]
			}
		},
		methods:{
			datecut(date){
        return date.substr(0,11)
        },
        get_face(uid){
          let _vue=this
          return _vue.user_face + uid +'.jpg'

        },
        has_comment(){
          return this.commentlist.length
        }
		},
		created(){
			get_userchat().then(
				res=>{
					this.commentlist=res
				}
				)
		}

	};
</script>

<style scoped>
hr{
  margin:0;
  border:.5px solid #fff;
}
.maxh{
      max-height:52px;
      max-width:52px;
      border-radius:26px;

    }
.wa{

}

.inline{
  display:inline;
}
.paddingnone{
  padding:0px;
}
.username{
  line-height:28px;
}
.user_face{
  margin-top: 10px;
  width:32px;
  border-radius:50%;
  max-width:60px;
  border:1px solid #fff;
}
.usercomment{
  margin-top: 10px;
  font-size:12px;
  color:rgba(0,0,0,0.7);
  margin-bottom: 10px;
}
.commentItem{
  padding:0px;
}
.commentItem:hover{
  margin-left:-10px;
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.3)
}
</style>

