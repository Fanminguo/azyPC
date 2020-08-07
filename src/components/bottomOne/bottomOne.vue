<template>
  <div class="com-footer-wrap">

    <div class="com-footer">
      <div class="codeList ">
        <span class="codeImg">
          <img src="https://www.aizhiyi.com/mobile/image/erwema.png?121" alt="爱之依">
          <span>扫码下载爱之依</span>
        </span>
        <span class="codeImg">
          <img :src="code" alt="爱之依">
          <span>{{codeText}}</span>
        </span>
      </div>
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
      <p class="info-2"><span class="info-top"> 客户服务中心(7×24):全国统一热线：010-80444865 | 客服邮箱：kefu@aizhiyi.com |
          人事邮箱：liuj@aizhiyi.com | 招商邮箱：zhaoshang@aizhiyi.com</span></p>
    </div>
  </div>
</template>
<style src="@/components/header/header.css" scoped="scoped"></style>

<script>
  export default {
    name: 'ButtomOne',
    data() {
      return {
        thisUrl: '',
        code: '',
        codeText: '',
        zsCode: 'https://www.aizhiyi.com/mobile/image/3-zs.png?12',
        hrCode: 'https://www.aizhiyi.com/mobile/image/2-hr.png?22',
        kfCode: 'https://www.aizhiyi.com/mobile/image/1-kf.png?32'
      }
    },
    mounted() {
      this.thisUrl = this.$route.path
      if (this.thisUrl == '/recruit') {
        this.code = this.hrCode
        this.codeText = '微信添加人事经理'
      } else if (this.thisUrl == '/settlement') { //招商
        this.code = this.zsCode
        this.codeText = '微信添加招商经理'
      } else {
        this.code = this.kfCode
        this.codeText = '微信添加爱之依客服'
      }
    },
    methods: {
      // 当前路径url

      golicence(url, id) {
        console.log(1)
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
<style scoped="scoped">
  .com-footer-wrap {
    position: static;
    width: 100%;
    /* height: 339px; */
    padding-bottom: 40px;
    background: rgba(51, 49, 55, 1);
  }

  .codeList {
    padding-top: 47px;
    padding-bottom: 25px;
  }

  .codeImg {
    position: relative;
    width: 100%;
    height: auto;
    margin-left: 25px;
  }

  .codeImg img {
    width: 7.5%;
    height: 8%;
  }
  .com-footer-wrap .codeImg span {
    top: 10px;
    left: 0;
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-top: 15px;
    text-align: center;
    width: 100%;
  }
</style>
