import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:''|| localStorage.getItem('islogin'),
    username:''|| localStorage.getItem('username'),
    usersex:''|| localStorage.getItem('usersex'),
    userid:''|| localStorage.getItem('userid'),
    useraccount:''|| localStorage.getItem('useraccount'),
    usersign:''|| localStorage.getItem('usersign'),
    useraire:''|| localStorage.getItem('useraire'),
    hasface:''|| localStorage.getItem('hasface'),
  },
  mutations: {
    change_logstate(state,payload){
      state.islogin=1;
      localStorage.setItem('islogin',payload.res.islogin);
      localStorage.setItem('username',payload.res.username);
      localStorage.setItem('usersex',payload.res.usersex);
      localStorage.setItem('userid',payload.res.userid);
      localStorage.setItem('useraccount',payload.res.useraccount);
      localStorage.setItem('usersign',payload.res.usersign);
      localStorage.setItem('useraire',payload.res.useraire); 
      localStorage.setItem('hasface',payload.res.hasface);
      state.userid=payload.res.userid;
      state.useraire=payload.res.useraire;
      state.useraccount=payload.res.useraccount;
      state.username=payload.res.username;
      state.usersex=payload.res.usersex;
      state.usersign=payload.res.usersign;
      state.hasface=payload.res.hasface;
      console.log(state.hasface);

     
    },
    change_user_info(state,payload){
      state.username=payload.userinfo.username;
      localStorage.setItem('username',payload.userinfo.username);
      state.usersex=payload.userinfo.usersex;
      localStorage.setItem('usersex',payload.userinfo.usersex);
      state.usersign=payload.userinfo.usersign;
      localStorage.setItem('usersign',payload.userinfo.usersign);
      state.useraire=payload.userinfo.userarea;
      localStorage.setItem('useraire',payload.userinfo.userarea)

    },
    logout(state){
      state.islogin=0;
      localStorage.removeItem('islogin');
       state.hasface=0;
       localStorage.removeItem('hasface');
    },
    register_login(){

    }
  },
  actions: {
  },
  getters:{
  },
  modules: {
  }
})
