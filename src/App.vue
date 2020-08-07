<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
	  var isMobile = {
	    Android: function() { //安卓
	      return navigator.userAgent.match(/Android/i) ? true : false;
	    },
	    BlackBerry: function() { //黑莓
	      return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	    },
	    iOS: function() { //ios
	      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	    },
	    Windows: function() { //电脑
	      return navigator.userAgent.match(/IEMobile/i) ? true : false;
	    },

	    any: function() {
	      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	    },

	  };
	  if (isMobile.any()) {
	    window.location = 'https://www.aizhiyi.com/mobile/app_load.html'
	  }
  }
}
</script>

<style>

</style>
