<template>
	<el-row class="container">
		<!-- 应用头部区域 -->
		<vheader></vheader>
		<el-col :span="24" class="main">
			<el-col :span="4" class="left">
					<!-- 页面管理区域 -->
				<vpage></vpage>
			</el-col>
			<el-col :span="16" class="center">
			
				<section class="content-container">
					<div class="grid-content bg-purple-light">
						<el-col :span="24" class="content-wrapper">
							<!-- 内容编辑区域 -->
							<vcontent  :slide="slide"
      :current-page="currentPage"
      :current-comp.sync="currentComp"></vcontent>
						</el-col>
					</div>
				</section>
			</el-col>
			<el-col :span="4" class="right">
				<!-- 工具区域 -->
				<vedit
      :slide="slide"
      :current-page ="currentPage" 
      :current-comp.sync = "currentComp">
    </vedit>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
import vheader from "./layout/header.vue";
import vbreadcrumb from "./layout/breadcrumb.vue";
import vnav from "./layout/nav.vue";
import vpage from "./layout/page.vue";
import vcontent from "./layout/content.vue";
import vedit from "./layout/edit.vue";
var defautPageSetting = function() {
  return {
    style: {
      backgroundColor: "#ffffff",
      image: null
    },
    comps: []
  };
};
export default {
  data: function() {
    return {
      id: null,
      slide: {
        title: "我的h5作品",
        description: "我的h5作品",
        icon: "",
        tags: "",
        music: {},
        pages: [defautPageSetting()]
      },
      tpl: -1,
      template: false,
      release: -1,
      activePageIndex: 0,
      currentComp: {
        type: "h5Page"
      },
      showSetingDialog: false,
      showAdminSetingDialog: false,
      showPictureDialog: false,
      pictureDialogType: "",
      showPreviewDialog: false,
      showFormZoneDialog: false
    };
  },
   watch: {
    getTxtInfo() {
	  var txtInfo = this.$store.getters.getTxtInfo;
		this.currentComp.type='h5Text';
    }
  },
  computed: {
    currentPage: function() {
      var len = this.slide.pages.length;
      if (this.activePageIndex >= len) {
        this.activePageIndex = len - 1;
      }
      return this.slide.pages[this.activePageIndex];
    },
    isAdmin: function() {
      return false;
	},
	 getTxtInfo() {
      return this.$store.getters.getTxtInfo;
    }
  },
  components: {
    vheader,
    vbreadcrumb,
    vnav,
    vpage,
    vcontent,
    vedit
  }
};
</script>

<style scoped lang="scss">
@import "~scss_vars";

.container {
  .main {
    position: fixed;
    top: $num10*4;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    .left,
    .center,
    .right {
      height: 100%;
      position: relative;
    }
    .left {
      border-right: $borderone;
      .top {
        border-top: 2px solid $color-primary;
        font-size: $num10*1.2;
        line-height: $num10*3;
        color: $font-color;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f2f7f8;
        img {
          margin-right: $num5;
        }
      }
      .bottom {
        position: absolute;
        top: 32px;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: $num30;
        overflow-y: auto;
        .leftPage {
          padding-top: $num30;
          .page {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: relative;
            img {
              vertical-align: top;
            }
            .pageLeft {
              height: 100%;
              width: 20%;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              .dis_flex {
                height: 20%;
                color: darken($font-color, 30%);
                font-size: $num10*1.4;
                display: flex;
                justify-content: center;
                align-items: center;
                .align_center {
                  width: 0;
                  height: 100%;
                }
              }
              .active {
                display: none;
              }
            }
            .pageRight {
              width: 80%;
              position: relative;
              .closeImage {
                position: absolute;
                top: 0;
                right: 0;
                border: none;
                width: 18%;
                cursor: pointer;
              }
              .addImage {
                position: absolute;
                bottom: -$num10*1.8;
                left: 33.5%;
                border: none;
                width: 20%;
                cursor: pointer;
              }
              img {
                border: $borderone;
                width: 87%;
                height: auto;
              }
              .active {
                display: none;
              }
            }
          }
          .page_active {
            background: #d8d8d8;
            .pageLeft,
            .pageRight {
              .active {
                display: block;
              }
            }
            .pageLeft {
              .dis_flex {
                color: #fff;
              }
            }
          }
        }
      }
    }
    .center {
      background-color: $container-background;
    }
    .right {
      border-left: $borderone;
    }
    aside {
      height: 100%;
      border-right: $borderone;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        .submenu {
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
    }
    .menu-expanded {
    }
    .content-container {
      height: 100%;
      overflow-y: auto;
      .grid-content {
        height: 100%;
      }
      .content-wrapper {
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
}
</style>