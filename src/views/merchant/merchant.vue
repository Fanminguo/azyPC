<template>
  <div>
    <Header></Header>
    <div class="clear  no-user-select">
      <img class="banner" v-for="(item,index) in imgList" @key="index" :src="item.img" alt="">
    </div>
    <BottomOne></BottomOne>
  </div>

</template>

<script src="@/views/merchant/merchant.js" type="text/javascript"></script>
<style src="@/views/merchant/merchant.css" scoped="scoped"> </style>
