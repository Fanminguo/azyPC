<template>
  <div :class="id=='1'?'center':'boxImg'">
    <img :src="liceImg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'licence',
    data() {
      return {
        liceImg: '',
        id: ''
      }
    },
    mounted() {
      console.log(localStorage.getItem('id'))
      this.liceImg = localStorage.getItem('url');
      this.id = localStorage.getItem('id');
      localStorage.clear();

    }
  }
</script>

<style scoped="scoped">
  .boxImg {
    width: 600px;
    height: auto;
    margin: 0 auto;
  }

  .boxImg img {
    width: 600px;
    height: auto;
  }
  .center{
    width: 1000px;
    margin: 0 auto;
    margin-top: 5%;
  }
  .center img{
    width: 1000px;
    height:auto;
  }
</style>
