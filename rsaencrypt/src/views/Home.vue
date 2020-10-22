<template>
  <div class="home">
    <el-input type="textarea" autosize v-model="string"></el-input>
    <el-button type="success" @click='encrypt'>加密</el-button>
    <el-input type="textarea" autosize v-model="encryptStr"></el-input>
    <el-button type="danger" @click="decrypt">解密</el-button>
    <el-input type="textarea" autosize v-model="decryptStr" :disabled='true'></el-input>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { rsaEncrypt,rsaDecrypt } from "@/utils/crypt"

export default {
  name: 'Home',
  data(){
    return {
      string:'',
      encryptStr:'',
      decryptStr:''
    }
  },
  methods:{
    encrypt(){
      let self = this
      self.encryptStr = rsaEncrypt(self.string)
    },
    decrypt(){
      let self = this
      self.decryptStr = rsaDecrypt(self.encryptStr)
    }
  }
}
</script>

<style scoped>
  
</style>
