<template>
  <div class="mybody-out">
    <div class="panel panel-danger mybody2"  data-aos="fade-left" aos-duration="3000">
      <div class="panel-heading"></div>
      <div class="panel-body userinfo" id="userinfo" v-if="!getloginstate">   
      <!-- 表单    -->
        <form id="login_form">
          <div class="col-md-12">
            <div class="form-group">
              <!-- 用户名 -->
              <div class="input-group">
                <span class="input-group-addon "><span class=" glyphicon glyphicon-user"></span></span>
                <input class="form-control required" type="text" placeholder="Username" v-model="usercount" name="username"maxlength="20" value=""/>
              </div>
            </div>
            <!-- 用户密码 -->
            <div class="form-group ">
              <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                    <input class="form-control required " type="password" placeholder="Password" v-model="userpwd" name="user_password" maxlength="20" value=""/>
              </div>
            </div>
            <!-- 非空提示 -->
            <p class="p-danger" v-if='is_empty'>登录信息不能够为空!</p>
            <div class="form-group">
              <label class="checkbox">&nbsp&nbsp&nbsp&nbsp&nbsp
                <input type="checkbox" name="remember" value="86400*7" checked="checked" />记住我（7天）
              </label>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-danger btn-block"  @click="datacheck">登录</button>

              <button type="button" class="btn btn-danger btn-block" @click='to_register'>
                注册
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="well mybody3">
          <!-- 有头 -->
          <div class="col-sm-12 userface">
            <img :src="get_userface"  class="maxh">
          </div>
          <div class="text-center col-sm-12 user_name">
            <strong>{{this.$store.state.username}}</strong>
            <hr>
          </div>
          <div class="text-center">
            <div class="mytable">
              <div class="col-sm-4 uid "><strong>UID：</strong></div>
              <div class="col-sm-8 uid">{{this.$store.state.userid}}</div>
            </div>
            <div class="mytable">
              <div class="col-sm-4 "><strong>性别：</strong></div>
              <div class="col-sm-8">{{this.$store.state.usersex}}</div>
            </div>
            <div class="mytable">
              <div class="col-sm-4 "><strong>地区：</strong></div>
              <div class="col-sm-8">{{this.$store.state.useraire}}</div>
            </div>
            <div class="mytable">
              <div class="col-sm-4 "><strong>用户签名：</strong></div>
              <div class="col-sm-8">{{this.$store.state.usersign}}</div>
            </div>
            
            
            
            
            <div class="col-sm-12">
              <hr>
            </div>
            

          </div>

            <button class="btn btn-sm btn-block btn-danger" @click="logout">退出登录</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div><!--登录框结束-->  
</template>

<script>
import {login} from '@/network/home.js';
export default {
  name: 'Minilog',
  data(){
    return{
      islogin:this.$store.state.islogin,
      usercount:"",
      userpwd:"",
      is_empty:false,
      
    }
  },
  methods:{
    datacheck(){
      if(this.usercount==""||this.userpwd==""){
        this.is_empty=true
      }else{
        this.is_empty=false
        login(this.usercount,this.userpwd).then(res=>{
          if(res){console.log(res)
            this.islogin=1;           
            this.$store.commit({
              type:'change_logstate',

              res
            })
          }else{

          }
        }
          
          )
      }
    },
    logout(){
       this.$store.commit({
              type:'logout'
            })
       this.islogin=this.$store.state.islogin
    },
    to_register(){
      this.$router.push("/register");
    }
  },
  computed:{
    get_userface(){
      let _vue=this;
      if(this.$store.state.hasface==1){
        return _vue.user_face +  this.$store.state.userid +'.jpg'
      }else{
        return _vue.user_face +'user_define.jpg'
      }
      
    },
    getloginstate(){
      return this.$store.state.islogin;
    },
    is_hasface(){
      return this.$store.state.hasface;
    },
  }
};
</script>
<style scoped>
  .user_name{
    color: #000000;
    font-size: 20px;
    font-family: 'Wawati SC';
  }
  .user_sign{
    color: rgb(234, 232, 238);
    font-family: 'Wawati SC';
  }
  .uid{
    color:#D9534F;
  }
  .userface img{
    width: 60px;
    height: 60px;
    border:3px solid #ffffff;
    border-radius:30px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  hr{
      margin-top: 10px;
      margin-bottom: 10px;
    }
  table{
    width: 100%;
  }
  .mytable div:first-child{
    text-align: right;
  }
  .mytable div:last-child{
    margin-left:-20px;
    text-align: left;
  }
</style>