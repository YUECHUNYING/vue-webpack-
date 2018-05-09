<template>
	<section>
    <el-col :span="24" class="toolBar">
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_012.png" width="12" height="12" />
        <div>模板</div>
      </el-col>
      <el-col :span="1" class="toolBar_item toolBar_item_active">
        <img src="../assets/h5_015.png" width="12" height="12" />
        <div>文字</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_016.png" width="12" height="12" />
        <div>图片</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_018.png" width="12" height="12" />
        <div>形状</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_020.png" width="12" height="12" />
        <div>按钮</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_022.png" width="12" height="12" />
        <div>表单</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_024.png" width="12" height="12" />
        <div>互动</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_026.png" width="12" height="12" />
        <div>特效</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_028.png" width="12" height="12" />
        <div>组件</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../assets/h5_030.png" width="12" height="12" />
        <div>素材</div>
      </el-col>
    </el-col>
    <div class="iphone_warp">
      <div class="iphone_rel">
        <img src="../assets/h5_042.png" class="iphone_bg" />
        <div class="iphoneScreen">
          <!-- <img src="../assets/h5_041.jpg" class="bg" /> -->
          <!-- <component v-bind:is="h5Text"> </component> -->
          <!-- <h5Text></h5Text> -->
        </div>
        <div class="iphone_left">
          <div class="iphone_left_item">
            <img src="../assets/h5_032.png" />
            <div>音乐</div>
          </div>
          <div class="iphone_left_item">
            <img src="../assets/h5_033.png" />
            <div>页码</div>
          </div>
          <div class="iphone_left_item">
            <img src="../assets/h5_034.png"/>
            <div>翻页</div>
          </div>
        </div>
        <div class="iphone_right">
          <div class="iphone_right_item">
            <img src="../assets/h5_035.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../assets/h5_036.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../assets/h5_037.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../assets/h5_038.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../assets/h5_039.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../assets/h5_040.png" width="20" height="20" />
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
import axios from "axios";
import { getUserInfo } from "../api/api";
export default {
 
  data() {
    return {
      logining: false
    };
  },
  methods: {},
  mounted() {

  },
   components : {
    h5Text : require('../components/h5Text.vue'),
  }
};
</script>

<style scoped lang="scss">
@import '~scss_vars';

section{
  height: 100%;
  position:relative;
  .toolBar{
    height: $num10*4.3;
    line-height: $num10*4;
    background:#f8f9fa;
    border-bottom: $borderone;
    img{
      vertical-align: top;
      margin-top: $num10*0.6;
    }
    .toolBar_item{
      padding:0;
      text-align:center;
      line-height: $num10*2;
      font-size: $num10*1.2;
    }
    .toolBar_item_active{
      color: $color-primary;
      border-bottom:2px solid #29b4b0;
    }
  }
  .iphone_warp{
    position:fixed;
    top:15%;
    left: 40%;
    bottom:10%;
    .iphone_rel{
      height:100%;
      position:relative;
      .iphoneScreen{
        position:absolute;
        top:7%;
        bottom:7%;
        left:3%;
        right:3%;
        overflow:hidden;
        .bg{
          width:100%;
          height:100%;
        }
      }
      .iphone_bg{
        height:100%;
      }
      .iphone_left{
        position:absolute;
        top:7%;
        left:-10%;
        font-size:$num10*1.2;
        color:lighten($font-color,20%);
        text-align:center;
        .iphone_left_item{
          margin-bottom:$num10;
          cursor: pointer;
        }
      }
      .iphone_right{
        position:absolute;
        top:7%;
        right:-10%;
        background:rgba(0,0,0,0.3);
        width:36px;
        text-align:center;
        .iphone_right_item{
          padding:12px 0;
          cursor: pointer;
        }
      }
    }
  }
}

</style>