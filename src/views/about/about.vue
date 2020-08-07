<template>
  <div>
    <Header></Header>
    <div class="video-about">
      <video ref="video" class="video" preload autoplay  controls>
        <source src="https://www.aizhiyi.com/mobile/image/zsbsp.mp4" type="video/mp4">
        抱歉，您的浏览器不支持内嵌视频
      </video>
      <div class="mask"></div>
    </div>
    <div class="clear no-user-select">
      <img class="banner" v-for='(item,index) in imgList' @key="index" :src="item.img" alt="">
    </div>
    <BottomOne></BottomOne>
  </div>
</template>
<script src="@/views/about/about.js" type="text/javascript" charset="utf-8"></script>
<style scoped="scoped">
  .clear {
    width: auto !important;
    height: auto !important;
  }

  .banner {
    width: 100%;
    height: auto;
    display: block;
  }

  .video-about {
   /* position: absolute;
    top: 8%; */
    background-color: #f5f5f5;
    width: 100%;
    height:50%;
    margin: 0 auto;
  }

  .video-about .video {
    width: 51%;
    height: 100%;
    margin: 0 auto;
    margin-left: 25%;
  }
  video:focus{outline:none;}
</style>
