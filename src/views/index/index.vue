
<template>
  <div>
    <Header @getData="getData"></Header>
    <div class="video-wrap">
      <img src="https://www.aizhiyi.com/mobile/image/直播2.00_00_00_11.静止002.jpg" alt="背景图片">
      <video ref="video" class="video" loop  autoplay muted >
        <source src="https://www.aizhiyi.com/mobile/image/azy_55.mp4" type="video/mp4">
        抱歉，您的浏览器不支持内嵌视频
        </video>
      <div class="mask" ></div>
    </div>
    <div class="main-content clear no-user-select">
      <!-- <h1 class="azy-slogan">爱之依-电商</br>为您精选中国好物</h1> -->
      <div class="qr-code">
        <img src="https://www.aizhiyi.com/mobile/image/erwema.png?1" alt="二维码" class="image">
        <span class="text">扫码下载&nbsp;爱之依</span></div>
      <div class="btn-wrap">
        <div @click="goApp('https://itunes.apple.com/cn/app/m-help/id1103658456?mt=8')" class="btn ios"></div>
        <div @click="goApp('https://imtt.dd.qq.com/16891/apk/156F8BE21F22A7AFF62304A9B0B56ED4.apk?fsname=com.aizhiyi_1.5_24.apk&csr=1bbd')" class="btn android"></div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<style src="@/views/index/index.css" scoped></style>
<script src="@/views/index/index.js" type="text/javascript" charset="utf-8"></script>
