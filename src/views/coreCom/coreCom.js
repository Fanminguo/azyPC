import Header from '@/components/header/header.vue'
import BottomOne from '@/components/bottomOne/bottomOne.vue'
var _default = (function() {
  var _this = null;
  return {
    name: 'coreCom',
    created: function() {
      _this = this;
    },
    data() {
      return {
        height: `${document.documentElement.clientHeight}`,
        screenWidth: '',
        imgList: [{
            img: 'https://www.aizhiyi.com/mobile/image/1.png?1',
            id:'one'
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/1_02.jpg',
            id:'two'

          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/1_03.jpg',
            id:'three'
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/1_04.jpg',
            id:'four'
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/1_05.jpg',
            id:'five'
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/1_06.jpg',
            id:'six'
          },

        ]
      }
    },
    mounted: function() {

      this.screenWidth = document.body.clientWidth;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
        })();
      };
      this.parms = this.$route.params.parms;
      // this.positionTo()
      this.goTop(this.parms)
    },

    methods: { //方法，事件存放
      goTop(data) {
        this.parms = data
        this.positionTo()
      },
      positionTo() {
      console.log(this.screenWidth)
      console.log(this.height)
      let naturalHeight;
        if (this.parms == 1) {
           naturalHeight = this.$refs.two[0].offsetTop
          this.y = naturalHeight - (this.screenWidth - this.height) / 7.8;
        } else if (this.parms == 2) {
           naturalHeight = this.$refs.three[0].offsetTop
          this.y = naturalHeight - (this.screenWidth - this.height) / 7.8;
        } else if (this.parms == 3) {
           naturalHeight = this.$refs.four[0].offsetTop
          this.y = naturalHeight - (this.screenWidth - this.height) / 7.8;
        } else if (this.parms == 4) {
           naturalHeight = this.$refs.five[0].offsetTop
          this.y = naturalHeight - (this.screenWidth - this.height) / 7.8;
        } else if (this.parms == 5) {
           naturalHeight = this.$refs.six[0].offsetTop
          this.y = naturalHeight - (this.screenWidth - this.height) / 7.8;
        }
        window.scrollTo(0, this.y);
      }

    },
    components: { //组件
      Header,
      BottomOne
    }

  }
})();

export default _default;
