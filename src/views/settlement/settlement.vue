<template>
  <div>
    <Header></Header>
    <div class="clear no-user-select">
      <img class="banner" v-for="(item,index) in imgList" :src="item.img" @key="index" alt="">
    </div>
    <BottomOne></BottomOne>
  </div>
</template>

<script src="./settlement.js" type="text/javascript" charset="utf-8"></script>
<style scoped="scoped">
.clear{ width: auto !important; height: auto !important;}
	.banner{ width: 100%; height: auto;display: block;}
</style>
