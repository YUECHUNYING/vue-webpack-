<template>
  <div id="textEditPanel" class="panel panel-default panel-zone">
    <div class="panel-body">
      <ul class="nav nav-tabs tab_nav">
        <li  class="tab_item tab_item_active">样式</li>
        <li class="tab_item">动画</li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active">
          <el-form class="text_area" size="mini">
            <el-form-item>
              <el-input type="textarea" v-model="comp.text"></el-input>
            </el-form-item>
            <el-form-item label="字体" label-width="80px">
              <!-- <el-select  placeholder="默认字体">
                <el-option label="区域一" :value="shanghai"></el-option>
                <el-option label="区域二" :value="beijing"></el-option>
              </el-select> -->
            </el-form-item>
            <el-form-item label="字号" label-width="80px">
              <!-- <el-select placeholder="14px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> -->
            </el-form-item>
            <el-form-item label="字体颜色" label-width="80px" class="mgB0">
              <el-color-picker v-model="comp.color">></el-color-picker>
            </el-form-item>
            <el-button-group class="dis_fle">
              <i class="fa icon-bold"></i>
              <el-button  size="small"   @click="toggleBold"><i class="fa fa-bold" aria-hidden="true"></i></el-button>
              <el-button  size="small"  @click="toggleItalic"><i class="fa fa-italic" aria-hidden="true"></i></el-button>
              <el-button  size="small"  @click="toggleUnderline"><i class="fa fa-underline" aria-hidden="true"></i></el-button>
              <el-button  size="small"><i class="fa fa-trash" aria-hidden="true"></i></el-button>
               <el-button  size="small"><i class="fa fa-align-left" aria-hidden="true"></i></el-button>
                <el-button  size="small"><i class="fa fa-align-center" aria-hidden="true"></i></el-button>
                <el-button  size="small"><i class="fa fa-align-right" aria-hidden="true"></i></el-button>
            </el-button-group>
            <div class="num_warp">
              <div class="text">行高</div>
              <el-slider  class="slider" size="mini"></el-slider>
              <el-input-number controls-position="right" :min="1" :max="10" size="mini" class="inputNumber"></el-input-number>
            </div>
            <div class="num_warp">
              <div class="text">字距</div>
              <el-slider class="slider" size="mini"></el-slider>
              <el-input-number controls-position="right" :min="1" :max="10" size="mini" class="inputNumber"></el-input-number>
            </div>
            <div class="num_warp">
              <div class="text">透明度</div>
              <el-slider  class="slider" size="mini"></el-slider>
              <el-input-number controls-position="right" :min="1" :max="10" size="mini" class="inputNumber"></el-input-number>
            </div>
            <div class="num_warp">
              <div class="text">旋转</div>
              <el-slider  class="slider" size="mini" v-model="comp.transform"></el-slider>
              <el-input-number controls-position="right" :min="1" :max="10" size="mini" class="inputNumber"></el-input-number>
            </div>
          </el-form>
         
         
        </div>
        <div class="tab-pane">
          <!-- <animate 
            v-if="comp.animate" 
            :animate.sync="comp.animate" 
            :animate-show.sync="comp.isShowAnimate"
          >
          </animate> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~scss_vars";
  .tab_nav{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    line-height: $num10*4;
    background-color: #f5f7fa;
    border-bottom: 1px solid #e4e7ed;
    padding: 0;
    margin: 0;
    .tab_item{
      width: 50%;
      -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      border: 1px solid transparent;
      margin: -1px -1px 0;
      color: #909399;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-weight: 500;
      color: #303133;
      position: relative;
      list-style: none;
      cursor: pointer;
    }
    .tab_item_active{
      color: #409eff;
      background-color: #fff;
      border-right-color: #dcdfe6;
      border-left-color: #dcdfe6;
    }
  }
  .el-form-item--mini .el-form-item__content, .el-form-item--mini .el-form-item__label{
    text-align: left!important;
  }
  .text_area{
    padding: $num10 $num15;
    .el-form-item>label{
      width:20%;
      padding: 0;
    }
    .el-form-item{
      margin-bottom: $num10;
      label{
        text-align: left;
      }
    }
    .mgB0{
      margin-bottom:0;
    }
  }
  .el-button-group{
    display:flex;
    justify-content: center;
    .el-button{
      border: none;
      i{
        font-size: $num10*1.8;
      }
    }
    .border_l{
      border-left: $borderone;
    }
  }
  .num_warp{
    display: flex;
    align-items: center;
    .text{
      width: 20%;
      min-width:$num10*6;
      color:#666;
    }
    .slider{
      width: 50%;
    }
    .inputNumber{
      margin-left:$num10;
      width: 30%;
    }
  }
  .paragraph{
    height: $num10*2;
    border-bottom:$borderone;
    position: relative;
    margin-bottom: $num10*3;
    .text{
      line-height: $num10*4;
      width: 30%;
      background: #fff;
      text-align: center;
      position: absolute;
      top:0;
      left:35%;
    }
  }
  .dis_flex{
    width: 40%;
    display: flex;
    align-items: center;
    .lab{
      width: 20%;
      text-align: right;
      color:#999;
    }
    .inputNumber{
      width: 80%;
    }
  }
  .tab-content > .tab-pane {
    display: block;
    visibility: hidden;
  }
  .tab-content > .tab-pane.active{
    visibility: visible;
  }
</style>
<script>
var arrFontSize = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119];
export default {
  data: function(){
    return {
  
    }
  },
  props: {
    comp: {
      type: Object,
      required: true
    }
  },
  watch:{
    'comp.text'() {
      var test=this.$store.getters.getTxtInfo;
      test.text=this.comp.text.replace(/\n/g, '<br>');
      this.$store.dispatch('setTxtInfo',test);
    },

    'comp.color'() {
         var test=this.$store.getters.getTxtInfo;
       test.style.color=this.comp.color;
      this.$store.dispatch('setTxtInfo',test);
    },

    'comp.transform':function() {
        var test=this.$store.getters.getTxtInfo;
       test.position.transform=this.comp.transform;
      this.$store.dispatch('setTxtInfo',test);
    }
  },
  methods: {
    switchPanel: function(index){
      $('#textEditPanel').find('.nav-tabs li').removeClass('active');
      $('#textEditPanel').find('.nav-tabs li').eq(index).addClass('active');
      $('#textEditPanel .tab-pane').css('visibility', 'hidden');
      $('#textEditPanel .tab-pane').eq(index).css('visibility', 'visible')
    },    
    toggleBold: function(){
      var test=this.$store.getters.getTxtInfo;
      test.style.fontWeight=this.comp.isBold ? 'normal' : 'bold';
      this.$store.dispatch('setTxtInfo',test);
    },
    toggleItalic: function(){
      var test=this.$store.getters.getTxtInfo;
      test.style.fontStyle=this.comp.isItalic ? 'normal' : 'italic';
      this.$store.dispatch('setTxtInfo',test);
    },
    toggleUnderline: function(){
      var test=this.$store.getters.getTxtInfo;
      test.style.textDecoration=this.comp.isUnderline ? 'none' : 'underline';
      this.$store.dispatch('setTxtInfo',test);
    },
    toggleTextAlign: function(type){
      this.comp.style.textAlign = type;
    }
  },
  components: {
  }
}
</script>