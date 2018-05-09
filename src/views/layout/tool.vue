<template>
	<section>
    <el-col :span="24" class="toolBar">
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_012.png" width="12" height="12" />
        <div>模板</div>
      </el-col>
      <el-col :span="1" class="toolBar_item toolBar_item_active" >
        <div @click="addText">
          <img src="../../assets/h5_015.png" width="12" height="12" />
          <div>文字</div>
        </div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_016.png" width="12" height="12" />
        <div>图片</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_018.png" width="12" height="12" />
        <div>形状</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_020.png" width="12" height="12" />
        <div>按钮</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_022.png" width="12" height="12" />
        <div>表单</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_024.png" width="12" height="12" />
        <div>互动</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_026.png" width="12" height="12" />
        <div>特效</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_028.png" width="12" height="12" />
        <div>组件</div>
      </el-col>
      <el-col :span="1" class="toolBar_item">
        <img src="../../assets/h5_030.png" width="12" height="12" />
        <div>素材</div>
      </el-col>
    </el-col>
	</section>
</template>

<script>
import axios from "axios";
import { getUserInfo } from "../../api/api";
export default {
   props: {
    currentPage: {
      type: Object,
      twoWay: true
    },
    currentComp:{
      type: Object,
      twoWay: true
    }    
  },
  data() {
    return {
      logining: false
    };
  },
  methods: {
    addText:function(){  
        this.$store.dispatch('setTxtInfo',{
        type: 'h5Text',
        text: '请输入文本',
        active: false,
        isShowView: true,
        isShowEdit: true,
        isShowAnimate: false,
        animate:{
          name: "none",
          duration: 1,
          delay: 0
        },
        position:{
          left: 60,
          top: 200,
          width: 200,
          height: 24,
          transform: 0
        },      
        style:{
          fontFamily: 'Microsoft Yahei',
          fontSize: '16px',
          color: '#000000',
          fontWeight: 'normal',
          fontStyle: 'normal',
          textDecoration: 'normal',
          textAlign: 'center',
          lineHeight: 1.5
        }
      });
    }
  },
  mounted() {

  },
   components : {
    h5Text : require('../../components/h5Text.vue'),
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