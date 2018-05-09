<template>
	<section>
    <!-- 工具菜单 -->
    <vtool></vtool>
    <div class="iphone_warp">
      <div class="iphone_rel">
        <img src="../../assets/h5_042.png" class="iphone_bg" />
        <div class="iphoneScreen">
            <component
                  v-for="(comp, index) in currentPage.comps" :key="index"
                  :is="comp.type" 
                  :class="[comp.type, 'active']"
                  :comp.sync="comp"
                  ref="list"
                >
                </component >         
        </div>
        <div class="iphone_left">
          <div class="iphone_left_item">
            <img src="../../assets/h5_032.png" />
            <div>音乐</div>
          </div>
          <div class="iphone_left_item">
            <img src="../../assets/h5_033.png" />
            <div>页码</div>
          </div>
          <div class="iphone_left_item">
            <img src="../../assets/h5_034.png"/>
            <div>翻页</div>
          </div>
        </div>
        <div class="iphone_right">
          <div class="iphone_right_item">
            <img src="../../assets/h5_035.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../../assets/h5_036.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../../assets/h5_037.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../../assets/h5_038.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../../assets/h5_039.png" width="20" height="20" />
          </div>
          <div class="iphone_right_item">
            <img src="../../assets/h5_040.png" width="20" height="20" />
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
import axios from "axios";
import { getUserInfo } from "../../api/api";
import vtool from "./tool.vue";
export default {
  props: {
    currentPage: {
      type: Object,
      required: true
    },
    currentComp: {
      type: Object,
      required: true,
      twoway: true
    }
  },
  data() {
    return {
      logining: false
    };
  },

  watch: {
    getTxtInfo() {
      var txtInfo = this.$store.getters.getTxtInfo;
      this.currentPage.comps.push(txtInfo);
      var len = this.currentPage.comps.length;
      //this.currentComp = this.currentPage.comps[len - 1];
    }
  },
  computed: {
    getTxtInfo() {
      return this.$store.getters.getTxtInfo;
    }
  },
  methods: {},
  mounted() {},
  components: {
    vtool,
    h5Text: require("../../components/h5Text.vue")
  }
};
</script>

<style scoped lang="scss">
@import "~scss_vars";

section {
  height: 100%;
  position: relative;
  .toolBar {
    height: $num10*4.3;
    line-height: $num10*4;
    background: #f8f9fa;
    border-bottom: $borderone;
    img {
      vertical-align: top;
      margin-top: $num10*0.6;
    }
    .toolBar_item {
      padding: 0;
      text-align: center;
      line-height: $num10*2;
      font-size: $num10*1.2;
    }
    .toolBar_item_active {
      color: $color-primary;
      border-bottom: 2px solid #29b4b0;
    }
  }
  .iphone_warp {
    position: fixed;
    top: 15%;
    left: 42%;
    right: 42%;
    .iphone_rel {
      height: 100%;
      position: relative;
      .iphoneScreen {
        position: absolute;
        top: 7%;
        bottom: 7%;
        left: 3%;
        right: 3%;
        background: darken($container-background, 50%);
        .bg {
          width: 100%;
          height: 100%;
        }
      }
      .iphone_bg {
        width: 100%;
        height: auto;
      }
      .iphone_left {
        position: absolute;
        top: 7%;
        left: -12%;
        font-size: $num10*1.2;
        color: lighten($font-color, 20%);
        text-align: center;
        .iphone_left_item {
          margin-bottom: $num10;
          cursor: pointer;
        }
      }
      .iphone_right {
        position: absolute;
        top: 7%;
        right: -12%;
        background: rgba(0, 0, 0, 0.3);
        width: 36px;
        text-align: center;
        .iphone_right_item {
          padding: 12px 0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>