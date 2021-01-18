<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="type++">{{type}}</button>
    <button @click="zoneCoding++">{{zoneCoding}}</button>
    {{chartData}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){
    return {
      type:1,
      zoneCoding:2
    }
  },
  computed:{
    chartData(){
      // console.log(1);
      return {
        type: this.type,
        zoneCoding: this.zoneCoding
      }
    }
  },
  watch:{
    chartData:{
      handler(value){
        this.change(value)
      }
    },
    type: {
      handler(value){
        this.change(value)
      },
      immediate: true
    }
  },
  methods: {
    change(value){
      console.log(value);
    }
  }
};
</script>
