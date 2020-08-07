import Header from '@/components/header/header.vue'
import Bottom from '@/components/bottom/bottom.vue'
var _default = (function() {
  var _this = null;
  return {
    name: 'index',
    created() {
      _this = this;
    },
    mounted() {
      this.IEVersion()
      window.onresize = () => {
        return (() => {
          window.fullWidth = document.documentElement.clientWidth;
          this.windowWidth = window.fullWidth; // 宽
        })()
      };
    },

    data() { //数据
      return {
        controlShow: false,
        windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      }
    },
    watch: {
      windowWidth(val) {
        let that = this;
        // console.log("实时屏幕宽度：", val, that.windowWidth);
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE || isEdge || isIE11){
          if (this.windowWidth < 1080) {
            $('.video').css('width', 'auto')
            $('.video').css('height', '100%')
          } else {
            $('.video').css('width', '100%')
            $('.video').css('height', 'auto')
          }
        }

      }
    },

    methods: { //方法，事件存放

      IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if (isIE) {
          var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
          reIE.test(userAgent);
          var fIEVersion = parseFloat(RegExp["$1"]);
          if (this.windowWidth < 1080) {
            $('.video').css('width', 'auto')
            $('.video').css('height', '100%')
          } else {
            $('.video').css('width', '100%')
            $('.video').css('height', 'auto')
          }
          return 'IE';
        } else if (isEdge) {
          console.log(this.windowWidth)
          if (this.windowWidth < 1080) {
            $('.video').css('width', 'auto')
            $('.video').css('height', '100%')
          } else {
            $('.video').css('width', '100%')
            $('.video').css('height', 'auto')
          }


          // alert('edge')
          return 'edge'; //edge
        } else if (isIE11) {
          if (this.windowWidth < 1080) {
            $('.video').css('width', 'auto')
            $('.video').css('height', '100%')
          } else {
            $('.video').css('width', '100%')
            $('.video').css('height', 'auto')
          }
          return 11; //IE11
        } else {
          $('.video').css('width', '100%')
          $('.video').css('height', '100%')
          return -1; //不是ie浏览器
        }
      },
      goApp(url) {
        window.open(url)
      },
      // 子组件传值控制声音
      getData(data) {
        var vmVideo = this.$refs.video
        this.controlShow = data
        if (this.controlShow) {
          vmVideo.muted = false
          this.controlShow = data
        } else {
          vmVideo.muted = true
          this.controlShow = data
        }
      }

    },
    components: { //组件
      Header,
      Bottom
    }

  }
})();

export default _default;
