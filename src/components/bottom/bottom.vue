<template>
  <div class="com-footer-wrap" style="background-color:transparent">
    <div class="com-footer">
      <p class="info-1">
        <a class="police-link" target="_blank" rel="nofollow" href="https://www.12377.cn">
          <span>网上有害信息举报专区丨中央网信办（国家网信办）违法和不良信息举报中心</span>
        </a>
        <a class="police-link" target="_blank" rel="nofollow" href="http://www.shdf.gov.cn/shdf/channels/740.html">
          <span>扫黄打非举报专区</span>
        </a>
      </p>
      <p class="info-2">
        <!-- <span class="police-icon"></span> -->
        <span>特许商业经营备案号 0110500711700188号 </span>
        <span>京ICP备17024508号-2</span>
        <span @click="golicence('https://www.aizhiyi.com/mobile/image/food.png','1')">
          <a href="javascript://;" class="police-link">食品经营许可证编号 JY11105321263330</a>
        </span>
        <span @click="golicence('https://www.aizhiyi.com/mobile/image/gb.png','1')">
          <a href="javascript://;" class="police-link">广播电视节目制作经营许可证-（京）字第17041号</a>
        </span>
        <span @click="golicence('https://www.aizhiyi.com/mobile/image/网络文化.png','2')">
          <a href="javascript://;" class="police-link">
            网络文化经营许可证-京网文-（2020）2315-355号
          </a>
        </span>




      </p>
      <p class="info-2"><span class="info-top">客户服务中心(7×24):全国统一热线：010-80444865 | 客服邮箱：kefu@aizhiyi.com | 人事邮箱：liuj@aizhiyi.com | 招商邮箱：zhaoshang@aizhiyi.com</span></p>
    </div>
  </div>
</template>
<style src="@/components/header/header.css" scoped="scoped"></style>
<script>
  export default {
    name: 'Buttom',
    data() {
      return {

      }
    },
    methods: {
      golicence(url, id) {
        console.log(url)
        let newUrl = this.$router.resolve({
          path: "/licence"
        });
        localStorage.setItem("url", url)
        localStorage.setItem("id", id)
        window.open(newUrl.href, "_blank");
      }
    }
  }
</script>
