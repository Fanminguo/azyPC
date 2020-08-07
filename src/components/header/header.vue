<template>
  <div class="header">
    <!-- <div style="width: 50px;height: 50px;color: #207DDD;background: #919191;" @click="go(loge)">
      点击
    </div> -->
    <router-link to="/" class="logo">
      <img :src="loge" alt="">
    </router-link>
    <!-- 声音 -->
    <span class="volumn" :class="!controlShow?'muted':'voice'" id="volumn" @click="setData"></span>
    <span class="volumn1" id="volumn1"></span>
    <ul class="list">
      <li class="item" :class="item.showText?'sub-menu':''" v-for="(item,index) in header" @key="index">
        <div class="nav" :class="active == item.path?'checked':''" @click="gotoTitle(item.path)" :title="item.name"><a
            class="nav" href="javascript://;">{{item.name}}</a></div>
        <i class="iconfont icon-nav-show" v-if="item.showText">&#xe686;</i>
        <i class="iconfont icon-nav-hide" v-if="item.showText">&#xe685;</i>
        <ul class="down-item" v-if="item.showText">
          <li v-for="(list,towIndex) in item.list" @key="towIndex">
            <div @click='gotoPath(list.path,list.id)'><a href="javascript://;">{{list.title}}</a></div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="backtop" @click="goTop">
      <div class="text">回到顶部</div>
    </div>
  </div>

</template>
<script src="@/components/header/header.js"></script>
