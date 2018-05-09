<template>
<div class="hy-comp">
  <drag 
    :active="comp.active"
    :enable="dragEnable"
    :top="comp.position.top"
    :left="comp.position.left"
    :width="comp.position.width"
    :height="comp.position.height"
    :transform="comp.position.transform"
    :handles="'ne, se, sw, nw'">
    <div class="inner" 
      :class="{'animated': isAnimated}"
      :style="[comp.style, animateStyle]">     
      {{comp.text}} 
    </div>
  </drag>
</div>
</template>
<style scoped>
  .hy-comp{
    position: absolute;
    top:0;
    left:0;
  }
  .inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
<script>
var findInArray =  function (array, callback) {
  for (let i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}
export default {
  props: {
    comp: {
      type: Object,
      required: true
    },
    dragEnable:{
      type: Boolean,
      default: true
    },
    animatable:{
      type: Boolean,
      default: true
    }    
  },
  data: function(){
    return {
      parentWidth: 0,
      parentHeight: 0
    }
  },
  mounted: function(){
    this.parentWidth = this.$el.parentElement.getBoundingClientRect().width;
    this.parentHeight = this.$el.parentElement.getBoundingClientRect().height;   
  },
  computed:{
    isAnimated: function(){
      return ! (this.comp.animate.name === 'none') && this.animatable;;
    },
    fixStyle: function(){
      var tmp = {};
      for(var prop in this.comp.style){
        if( ['left','top','width','height'].indexOf(prop) > -1 ){
          tmp[prop] = this.comp.style[prop] + 'px';
        }
        else if(['transform'].indexOf(prop) > -1){
          tmp[prop] = 'rotate(' + this.comp.style[prop] + 'deg)';
        }
        else{
          tmp[prop] = this.comp.style[prop]
        }
      }
      return tmp;
    },
    animateStyle: function(){
      return {
        animationName: this.comp.animate.name, 
        animationDuration: this.comp.animate.duration + 's',
        animationDelay: this.comp.animate.delay + 's'
      };
    }
  },
  components:{
    drag: require('../plugin/drag.vue')
  }
}
</script>