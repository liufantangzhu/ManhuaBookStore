	<template>
		<div>
			<div class="mybody-out">
        <div class="well mybody2 well-sm" data-aos="fade-left">
          <div class="input_commentbox">
             <!--未登录-->
            <div class="col-xs-1 col-md-2" v-if='!get_islogin'>
              <a href="#" class="marginnone">
                <img :src="get_noface"  class="maxh userface">
              </a>
            </div>
           <!--用户头像-->
            <div class="col-xs-1 col-md-2" v-else>
              <a href="#" class="marginnone">
                <img :src="get_userface"  class="maxh userface">
              </a>
            </div>

            <div class="form-group col-xs-10 col-md-8" style="margin-bottom:0px;"><!--发表评论-->
              <textarea class="form-control comment" rows="2" name="comment" maxlength="100" 
               placeholder="来一发评论吧，注意礼仪哦" v-model.lazy='user_comment'
              onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g,''))"
              >
              </textarea>                         
            </div>
            <div class="col-xs-1 col-md-2 maxh" style="padding:0px;">
              <button @click="send_out" class=" btn btn-info  btn-block">发表<br>评论</button> 
            </div>
          </div>
        </div>
        
      </div>
      <div class="well well-sm" v-if='unlogtis'>
        登录后才能发表评论哦
      </div>
      <div class="well well-sm" v-if='is_empty'>
        没有输入任何内容哦
      </div>
      <div class="well well-sm" v-if='is_success'>
        发表成功
      </div>
      <div class="mybody-out">
        <div class="well mybody2">
          <span><h3 class="marginnone">评论列表</h3></span><hr>
          <!--评论列表-->
          <div class="commentlist">
            <div class="col-xs-12 paddingnone" v-for="item in commentlist">
              <div class="col-xs-1 col-sm-1 col-md-1 paddingnone">
                  <img  :src="get_face(item.uid)"  class="user_face" />
              </div >
              <div class="col-xs-11 col-sm-11 col-md-11 paddingnone">
                
                  <a class="col-xs-6 text-left paddingnone username"><strong>{{item.user_name}}:</strong></a>
                  <span class="col-xs-6 text-right help-block paddingnone" >{{datecut(item.creat_time)}}</span> 
              </div>
              <div class="col-xs-12 paddingnone">
                <div class="col-xs-11 col-xs-offset-1 well well-sm usercomment">{{item.user_comment}}</div>
              </div>
            </div>
          </div>
          <div v-if='!has_comment'>
            <span>暂无评论，快来写下第一发评论吧=͟͟͞͞(꒪⌓꒪*)</span>
          </div>
        </div>
      </div>
		</div>
	</template>

	<script>
    import {send_comment} from '@/network/doc_info.js';
    import {get_doc_comment} from '@/network/doc_info.js';
		export default{
		name:'DocComment',
		  components: {

		  },
      props:{
      commentlist:{
        type:Array,

      }
    },
			data(){
				return{
          islogin:'',
          unlogtis:0,
          user_comment:'',
          is_empty:0,
          is_success:0,
          docid:this.$route.query.docid,
          userid:this.$store.state.userid,
          useraccount:this.$store.state.useraccount,

				}
			},
      methods:{
        send_out(){
          if(!this.islogin){
            this.unlogtis=1;
            this.mesg_fade();
          }else if(this.user_comment==''){
            this. is_empty=1;
            this.mesg_fade();
          }else{
            // console.log(this.docid,this.user_comment,this.userid,this.useraccount)
            send_comment(this.docid,this.user_comment,this.userid,this.useraccount).then(res=>{//docid,comment,userid,useraccount
              this.is_success=1;
              this.mesg_fade();
              this.$emit('RegetCommentList');
              // get_doc_comment(this.docid).then(res=>{
              //   return this.commentlist=res
              // });
              
            })
          }
        },
        datecut(date){
        return date.substr(0,11)
        },
        get_face(uid){
          let _vue=this
          return _vue.user_face + uid +'.jpg'

        },
        mesg_fade(){
          setTimeout(
            ()=>{
              this.unlogtis=0;this. is_empty=0;this.is_success=0
              },2000
            )
        }
      },
      computed:{
        get_userface(){
          let _vue=this
          return _vue.user_face +  this.$store.state.userid +'.jpg'
        },
        get_noface(){
          let _vue=this
          return _vue.user_face +'user_define.jpg'
        },
        get_islogin(){
          this.islogin=this.$store.state.islogin;
          return this.$store.state.islogin;
        },
        has_comment(){
          return this.commentlist.length
        }
      },
      activated(){
      }

		};
	</script>

	<style scoped>
    .maxh{
      max-height:52px;
      max-width:52px;
      border-radius:26px;

    }
    .userface{
      display: inline-block;
      height:64px;
      width:64px;
      border-radius:32px;
      border:3px solid #ffffff;
      overflow: hidden;
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
      width:100%;
      margin-left:-10px;
      border-radius:50%;
      max-width:40px;
    }
    .usercomment{
      font-size:12px;
      color:rgba(0,0,0,0.7)
    }
	</style>

