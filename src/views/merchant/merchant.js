import Header from '@/components/header/header.vue'
import BottomOne from '@/components/bottomOne/bottomOne.vue'
var _default = (function() {
  return{
    name:'merchant',
    data(){
      return{
        imgList:[
          {
            img:'https://www.aizhiyi.com/mobile/image/4_02.jpg',
          },
          {
            img:'https://www.aizhiyi.com/mobile/image/4_03.jpg',
          },
          {
            img:'https://www.aizhiyi.com/mobile/image/4_04.jpg',
          },

        ]
      }
    },
    components:{
      Header,
	  BottomOne
    }
  }

})()
export default _default;
