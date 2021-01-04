<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="login(1)">登录成功</button>
    <button @click="login(0)">登录失败</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapGetters([
      'token',
      'userName'
    ])
  },
  methods:{

    login(type){
      let obj = {
        userName: type?'15521413940':'123',
        password:type?'888888':'234'
      }
      console.log(type);
      this.$store.dispatch('login',obj)
        .then(res=>{
          console.log(res);
        })
        .catch(res=>{
          console.log(res)
        })
    }
  },
  mounted(){
  }
}
</script>
