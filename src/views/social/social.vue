<template>
  <div>
    <Header></Header>
    <div class="clear  no-user-select">
      <img class="banner" v-for="(item,index) in imgList" @key="index" :src="item.img" alt="">
    </div>
    <BottomOne></BottomOne>
  </div>

</template>

<script src="@/views/social/social.js" type="text/javascript"></script>
<style scoped="scoped">
  .clear{ width: auto !important; height: auto !important;}
  	.banner{ width: 100%; height: auto;display: block;}
    
</style>