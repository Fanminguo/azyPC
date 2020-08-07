import Header from '@/components/header/header.vue'
import BottomOne from '@/components/bottomOne/bottomOne.vue'
var _default = (function() {
  return{
    name:'social',
    data(){
      return{
        imgList:[
          {
            img:'https://www.aizhiyi.com/mobile/image/5_02.jpg',
          },
          {
            img:'https://www.aizhiyi.com/mobile/image/5_03.jpg',
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
