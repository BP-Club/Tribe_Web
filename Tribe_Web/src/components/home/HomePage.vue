<template>
  <div>
    <h1><div @click="open()">{{ msg }}</div></h1>
    <!-- <h2>Essential Links</h2> -->
    <!-- <h2>Ecosystem</h2> -->
  </div>
</template>

<script>
import appUrls from "../../global/appUrls";
import home from "../../api/home.api";

export default {
  name: 'HomePage',
  data () {
    return {
      msg: '牛人部落金融项目开工仪式'
    }
  },
  methods:{
    open(){
      home.openFnc().then(data=>{
        console.log(data);
        this.msg = data.data;
      });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 400px;
  text-align:center;
}
</style>
