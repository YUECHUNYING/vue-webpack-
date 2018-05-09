<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item prop="valiCode" style="display: flex;">
      <el-input type="text" v-model="ruleForm2.valiCode"  auto-complete="off" placeholder="验证码" style="width: 50%;vertical-align:top;"></el-input>

      <img id="valcodeimg" v-bind:src="imgUrl"  title="点击刷新验证码" style="margin-left:10px;cursor: pointer;" @click="getValCodeFn"/>
    </el-form-item>

    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="logining" @keyup.enter="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { tokenApi, getValCode, getUserInfo } from "../api/api";
import axios from "axios";
import NProgress from "nprogress";
export default {
  data() {
    return {
      logining: false,
      vid: "",
      imgUrl: "",
      ruleForm2: {
        account: "test12345",
        checkPass: "123456",
        valiCode: ""
      },
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        valiCode: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    login(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          _this.$router.replace("/main");
          this.logining = true;
          NProgress.start();
          var loginParams =
            "grant_type=password&username=" +
            this.ruleForm2.account +
            "&password=" +
            this.ruleForm2.checkPass;
          var hearders = { vid: this.vid, vcode: this.ruleForm2.valiCode };
          tokenApi(loginParams, hearders)
            .then(data => {
              this.logining = false;

              localStorage.setItem('accessToken', data.data.access_token);

              axios.defaults.headers.common["Authorization"] = "Bearer " + data.data.access_token;

              getUserInfo().then(data => {
                  this.$store.dispatch('setUserInfo',data.data);

                this.$router.push({ path: "/main" });
                
                NProgress.done();
              });
            })
            .catch(error => {
              if (error.response) {
                this.$message({
                  message: error.response.data.error_description,
                  type: "error"
                });
              }
              NProgress.done();
              this.logining = false;
                  this.getValCodeFn();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getValCodeFn() {
      getValCode().then(data => {
        this.vid = data.data.vid;
        this.imgUrl = "data:image/png;base64," + data.data.img;
      });
    }
  },
  mounted() {
    this.getValCodeFn();
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>