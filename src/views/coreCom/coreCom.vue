<template>
  <div>
    <Header @current="goTop"></Header>
    <div class="clear no-user-select">
      <img class="banner" v-for="(item,index) in imgList" :src="item.img" :ref="item.id" @key="index" alt="">
    </div>
    <bottomOne></bottomOne>
  </div>
</template>
<script src="@/views/coreCom/coreCom.js" type="text/javascript" charset="utf-8"></script>
<style scoped="scoped">
  .clear {
    width: auto !important;
    height: auto !important;
  }

  .header {
    position: absolute !important;
    width: 85%;
  }

  .banner {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
