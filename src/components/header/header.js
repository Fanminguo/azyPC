var _default = (function() {
  return {
    name: 'Herder',
    data() {
      return {
        controlShow: false,
        loge: 'https://bj.aizhiyi.com/wap/test/wap/xcxImg/logo.png',
        active: '',
        header: [{
            name: '首页',
            path: '/',
            showText: false
          }, {
            name: '核心能力',
            showText: true,
            path: '/coreCom',
            list: [{
              path: 'coreCom',
              title: 'OTO电商',
              id: '1'

            }, {
              path: 'coreCom',
              title: '内容电商',
              id: '2'
            }, {
              path: 'coreCom',
              title: '短视频',
              id: '3'
            }, {
              path: 'coreCom',
              title: '直播',
              id: '4'
            }, {
              path: 'coreCom',
              title: '商家OA体系',
              id: '5'
            }]
          }, {
            name: '社交电商',
            showText: false,
            path: '/merchant',
          }, {
            name: '商家入驻',
            path: '/settlement',
            showText: false,
          }, {
            name: '社会责任',
            path: '/social',
            showText: false,
          }, {
            name: '关于我们',
            path: '/about',
            showText: false,
          },
          {
            name: '人才招募',
            path: '/recruit',
            showText: false,
          }, {
            name: '商家登录',
            path: 'https://bj.aizhiyi.com/mall/SellerLogin/index',
            showText: false,
          }
        ]
      }
    },
    mounted() {
      
      window.addEventListener("scroll", this.handleScroll);
      let url = this.$route.path
      this.active = this.$route.path
      if (url == '/' && url != '/about' && url != '/merchant' && url != '/settlement' && url != '/social' && url !=
        "/recruit" && url != '/coreCom') {
        $('.volumn').show()
        $('.volumn1').hide()
      } else {
        $('.volumn').hide()
        $('.volumn1').show()
      }
      // header头色值
      if (url == '/about' || url == '/settlement' || url == '/social' || url == "/recruit" || url == '/merchant') {
        console.log(url)
        $('.header .list .item .nav').css('color', '#333')
        $('.header .list .item .iconfont').css('color', '#333')
      } else {
        $('.header .list .item .nav').css('color', '#fff')
        $('.header .list .item .iconfont').css('color', '#fff')
      }

    },
    methods: {
      gotoTitle(path, parms) {
        if (path.toLowerCase().indexOf("http") != -1) {
          window.open(path);
        } else {
          this.$router.push(path);
        }
      },
      gotoPath(path, parms) {
        this.$router.push({
          name: path,
          params: {
            parms: parms
          }
        })
        if (path == 'coreCom') {
          this.$emit('current', parms)
        }
      },
      // 视频声音
      setData() {
        if (this.controlShow) {
          this.controlShow = false
        } else {
          this.controlShow = true
        }
        this.$emit('getData', this.controlShow)
      },
      handleScroll() {
        //获取滚动时的高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 300) {
          //大于300的时候要做的操作
          $('.backtop').show()
        } else {
          $('.backtop').hide()
        }

      },
      //返回顶部
      goTop() {
        $("body,html").stop().animate({
          scrollTop: 0
        }, 500);
      }

    },
    destroyed() {
      document.removeEventListener('scroll', this.handleScroll)
    }

  }
})();

export default _default;
