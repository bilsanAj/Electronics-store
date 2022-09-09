import Vue from "vue";
import Vuex from "vuex";
import { getAPI } from "../axios_api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken:null,
    refreshToken:null,
    APIData: ''
  },
  mutations: {
    updateStorage(state,{access,refrsh}){
state.accessToken=access
state.refreshToken=refrsh
    }
  },
  actions: {
    userLogin(context,usercredentials){
return new Promise((resolve)=>{
getAPI.post('/accounts/gettoken/',{
  username:usercredentials.username,
  password : usercredentials.password
})
.then(response =>{
  context.commit('updateStorage',{access:response.data.access,refrsh:response.data.refrsh})
  resolve()
})
})
    }
  },
  modules: {}
});
