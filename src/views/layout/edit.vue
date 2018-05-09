<template>
<div class="f-ab edit-zone">
  <component v-show="currentComp" 
    :is="currentComp.type + 'Edit'" 
    :slide="slide"
    :page="currentPage"
    :comp.sync="currentComp">
  </component>
</div>  
</template>
<script>
export default {
  props: {
    slide: {
      type: Object,
      require: true,
      twoWay: true
    },    
    currentPage: {
      type: Object,
      require: true,
      twoWay: true
    },  
    currentComp:{
      type: Object,
      require: true,
      twoWay: true
    }
  },
  components : {
    h5TextEdit : require('../../components/h5TextEdit.vue'),
    h5PageEdit : require('../../components/h5PageEdit.vue'),
    h5ImageEdit : require('../../components/h5ImageEdit.vue'),
    h5FormEdit : require('../../components/h5FormEdit.vue'),
    h5ButtonEdit : require('../../components/h5ButtonEdit.vue')
  }
}
</script>