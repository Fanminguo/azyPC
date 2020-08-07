import Header from '@/components/header/header.vue'
import BottomOne from '@/components/bottomOne/bottomOne.vue'
var _default = (function() {
  var _this = null;
  return {
    name: 'about',
    created: function() {
      _this = this;
    },
    mounted: function() {
      // alert(1)

    },
    data: function() { //数据
      return {
        controlShow: false,
        imgList: [{
            img: "https://www.aizhiyi.com/mobile/image/pc_2_02.png"
          },
          {
            img: "https://www.aizhiyi.com/mobile/image/8.jpg"
          },
          {
            img: "https://www.aizhiyi.com/mobile/image/9.jpg"
          },
          {
            img: "https://www.aizhiyi.com/mobile/image/10.jpg?123"
          },

        ],
      }
    },
    methods: { //方法，事件存放

    },
    components: { //组件
      Header,
      BottomOne
    }

  }
})();

export default _default;
