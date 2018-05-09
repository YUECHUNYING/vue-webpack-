<template>
	<el-col :span="24" class="header">
		<el-col :span="4" class="logo" >
      <div class="logo_l">
        <span>H5名称</span>
        <img src="../../assets/h5_001.png" />
      </div>
      <div class="logo_r">
        <span>模板中心</span>
        <i class="el-icon-arrow-right"></i>
      </div>
		</el-col>
	
    <el-col :span="16" class="template_center">
      <el-col :span="24" class="right">
        <el-button type="primary" size="mini">预览和设置</el-button>
        <el-button type="primary" size="mini">发布</el-button>
        <el-button type="primary" size="mini">保存</el-button>
      </el-col>
    </el-col>

		<el-col :span="4" class="userinfo">
			<el-dropdown trigger="hover">
        <div class="userinfo_name">
          <img :src="this.sysUserAvatar" /> 
          <span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
          <i class="el-icon-arrow-down"></i>
        </div>
          
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>我的消息</el-dropdown-item>
					<el-dropdown-item>设置</el-dropdown-item>
					<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-col>
</template>

<script>
export default {
  data() {
    return {
      sysName: "群创后台管理系统",
      sysUserName: "",
      sysUserAvatar: ""
    };
  },
  watch: {
    getUserinfo() {
      var user = this.$store.getters.getUserInfo;
      this.sysUserName = user.userName || "";
      this.sysName = user.platName || "";
      this.sysUserAvatar = this.$root.$options.baseUrl.resourceUrl + user.photoUrl || "";
    }
  },
  computed: {
    getUserinfo() {
      return this.$store.getters.getUserInfo;
    }
  },
  methods: {
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          localStorage.removeItem("accessToken");
          _this.$router.push("/login");
        })
        .catch(() => {});
    }
  },
  mounted() {
    var user = this.$store.getters.getUserInfo;
    this.sysUserName = user.userName || "";
    this.sysName = user.platName || "";
    this.sysUserAvatar = this.$root.$options.baseUrl.resourceUrl + user.photoUrl || "";
  }
};
</script>


<style scoped lang="scss">
@import "~scss_vars";

.header {
  height: $num40;
  line-height: $num40;
  background: $defaultBg;
  color:$font-color;
  border-bottom: $borderone;
  .template_center{
    padding: 0 $num15;
    .right{
      padding-top: $num10*0.6;
      display:flex;
      align-items:center;
      justify-content:flex-end;
      button{
        background-color: $color-primary;
        border-color: $color-primary;
        cursor: pointer;
      }
    }
  }
  .userinfo {
    height:$num40;
    padding-right: $num20;
    border-left: $borderone;
    .el-dropdown{
      width:100%;
    }
    .userinfo_name{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      img{
        width:$num40*0.6;
        height:$num40*0.6;
      }
    }
    .userinfo-inner {
      padding:0 $num10;
      cursor: pointer;
    }
  }
  .logo {
    height: $LineHeight;
    font-size: $num10*1.4;
    padding: 0 $num15 0 $num20;
    color:darken($font-color,30%);
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-right: $borderone;
    .logo_l{
      display:flex;
      align-items:center;
    }
    .logo_r{
      color: $color-primary;
      display: flex;
      align-items: center;
      cursor:pointer;
    }
    img{
      margin-left: $num10;
      width:$num40*0.35;
      height:$num40*0.35;
    }
  }
}

</style>