<template>
  <div class="home">
    <h1>请求加解密</h1>
    <el-input type="textarea" autosize v-model="string"></el-input>
    <el-button type="success" @click='encrypt'>加密</el-button>
    <el-input type="textarea" autosize v-model="encryptStr"></el-input>
    <el-button type="danger" @click="decrypt">解密</el-button>
    <el-input type="textarea" autosize v-model="decryptStr" :disabled='true'></el-input>

    <h1>返回解密</h1>
    <el-input type="textarea" autosize v-model="resStr"></el-input>
    <el-button type="danger" @click="decryptRes">解密</el-button>
    <el-input type="textarea" autosize v-model="decryptresStr" :disabled='true'></el-input>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { rsaEncrypt,rsaDecrypt,rsaDecryptRes } from "@/utils/crypt"

export default {
  name: 'Home',
  data(){
    return {
      string:'',
      encryptStr:'',
      decryptStr:'',
      resStr:'',
      decryptresStr:''
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
    },
    decryptRes(){
      let self = this
      self.decryptresStr = rsaDecryptRes(self.resStr)
    }
  },
  mounted(){
    console.log(new Date(1671379199999));
    console.log(new Date());
    console.log(new Date()>new Date(1671379199999));
  }
}
</script>

<style scoped>
  
</style>
