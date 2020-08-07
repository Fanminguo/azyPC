import Header from '@/components/header/header.vue'
import BottomOne from '@/components/bottomOne/bottomOne.vue'
var _default = (function() {
  var _this = null;
  return {
    name: 'recruit',
    created: function() {
      _this = this;
    },
    data() {
      return {
        imgList: [{
            img: 'https://www.aizhiyi.com/mobile/image/6_02.jpg?1',
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/6_03.jpg?2',

          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/6_04.jpg?3',
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/6_05.jpg?4',
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/6_06.jpg?5',
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/6_07.jpg?6',
          },
          {
            img: 'https://www.aizhiyi.com/mobile/image/6_08.png?9',
          },

        ]
      }
    },
    mounted: function() {
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
