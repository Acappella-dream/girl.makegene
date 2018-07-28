<template>
  <div class="Card">
        <img class="Img" src="../assets/fakegirl.jpg"/>
        <div class="Info">
          <el-row gutter="50px">
            <el-col :span="12" style="text-align: left;">Name</el-col>
            <el-col :span="12" style="text-align: right;">{{name}}</el-col>
          </el-row>
          <el-row gutter="50px">
            <el-col :span="12" style="text-align: left;">ID</el-col>
            <el-col :span="12" style="text-align: right;">#{{id}}</el-col>
          </el-row>
          <el-row gutter="50px">
            <el-col :span="12" style="text-align: left;">Owner</el-col>
            <el-col :span="12" style="text-align: right;">#{{owner}}</el-col>
          </el-row>
          <el-row gutter="50px">
            <el-col :span="12" style="text-align: left;">Gene</el-col>
            <el-col :span="12" style="text-align: right;"><img v-bind:src="gene"/></el-col>
          </el-row>
          <el-row gutter="50px">
            <el-col :span="6" style="text-align: left;">Feature</el-col>
            <el-col :span="5" :style="{textAlign: right,marginLeft:'15px',background:eye}">Eye {{eye}}</el-col>
            <el-col :span="5" :style="{textAlign: right,marginLeft:'15px',background:hair}">Hair {{hair}}</el-col>
            <el-col :span="5" :style="{textAlign: right,marginLeft:'15px',background:mouth}">Mouth {{mouth}}</el-col>
          </el-row>
          <el-row gutter="50px">
            <el-col :span="8" style="text-align: left;">Source</el-col>
            <el-col :span="8" style="text-align: center;">#{{father}}</el-col>
            <el-col :span="8" style="text-align: right;">#{{mother}}</el-col>
          </el-row>
          <br/>
          <div class="buy-btn" v-if="this.$store.state.login && this.$store.state.operate==0">
            <el-row gutter="50px">
              <el-col :span="12" style="padding-top: 10px;"><label>0.01eos</label></el-col>
              <el-col :span="12"><el-button type="primary" @click="buyCard">Buy Now</el-button></el-col>
            </el-row>
          </div>
          <div class="sale-btn" v-if="this.$store.state.login && this.$store.state.operate==1">
            <el-row gutter="50px">
              <el-col :span="12" style="padding-top: 10px;"><label>0.01eos</label></el-col>
              <el-col :span="12"><el-button type="primary" @click="saleCard">Sale Now</el-button></el-col>
            </el-row>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data(){
      return {
        name:"Sakura",
        id:"f32a676c",
        owner:"girlmakegene",
        gene:require("../assets/code.jpg"),
        eye:"#666",
        hair:"#666",
        mouth:"#666",
        father:"f3673792a389a",
        mother:"7d643a92a676c",
      }
    },
    created(){
      console.log(this.$route.query.id);
    },
    methods:{
      buyCard(){
        this.$alert('购买成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      saleCard(){
        this.$alert('开始销售', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style scoped>
  .Card{
    width:50%;
    margin:0 auto;
  }

  .Img{
    width:50%;
    margin:0 auto;
  }

  .Info{
    font-size: large;
    border-radius: 10px;
    background-color: #545c64;
    color: white;
    padding:20px 30px;
  }
</style>
