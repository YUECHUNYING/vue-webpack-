<template>
<div class="f-ab">
  <div class="panel panel-default panel-zone">
    <div class="panel-body">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#tabPage" data-toggle="tab">样式</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="tabPage">
          <div class="form-group-item">
            <div class="flex-col-2">
              <div class="title">背景颜色:</div>
            </div>
            <div class="flex-row flex-col-6 ">
             
            </div>
          </div>
          <div class="form-group-item">
            <div class="flex-col-2">
              <div class="title">背景图片:</div>
            </div>
            <div class="flex-col-6 ">
              
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>
</template>
<script>
export default {
  props: {
    page: {
      type: Object,
      required: true
    } 
  },
  data: function(){
    return {
    }
  },
  methods:{
   
  }, 
   
  components: {

  }  
}
</script>
