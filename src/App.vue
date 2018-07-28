<template>
  <div id="app">
    <el-container>
   <el-header style="padding:0;">
     <el-menu
       :default-active="activeIndex"
       class="el-menu-demo"
       router="true"
       mode="horizontal">
       <el-menu-item index="home" style="text-decoration: none"><img style="width:72px;height:51px" src="./assets/logo.png"/></el-menu-item>
       <el-menu-item index="factory" style="float: right">Factory</el-menu-item>
       <el-menu-item index="market" style="float: right">Market</el-menu-item>
       <el-menu-item index="home" style="float: right" v-if="this.$store.state.login==false" @click="toSignIn()">Sign</el-menu-item>
       <el-menu-item index="user" style="float: right" v-if="this.$store.state.login==true"><img width="50px" src="./assets/head1.jpg"></el-menu-item>
     </el-menu>
   </el-header>
      <el-main>
          <router-view/>
      </el-main>
    </el-container>
    <el-dialog title="Sign In" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Account" :label-width="formLabelWidth">
          <el-input v-model="form.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" :label-width="formLabelWidth">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="signIn()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import ElHeader from "../node_modules/element-ui/packages/header/src/main.vue";
import ElContainer from "../node_modules/element-ui/packages/container/src/main.vue";
import Eos from './utils/getEos'

export default {
  components: {
    ElContainer,
    ElHeader},
  name: 'App',
  data(){
    return {
      activeIndex:'home',
      form:{
        account:null,
        passwd:null
      },
      dialogFormVisible:false
    }
  },
  created(){
    this.$store.state.eos=Eos
  },
  methods:{
    toSignIn(){
      this.dialogFormVisible=true;
    },
    signIn(){
      
      this.dialogFormVisible=false;
      this.$store.state.login=true;
      this.$store.state.account=this.form.account;
      this.$store.state.passwd=this.form.passwd;
      this.$router.push({path:"/user"})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  a{
    text-decoration: none;
  }
</style>
