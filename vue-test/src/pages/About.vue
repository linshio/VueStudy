<template>
  <div>
    <h2>我是About的内容</h2>  
  </div>
</template>

<script>
  export default {
    name:'About',
    //通过路由规则，进入该组件中被调用
    beforeRouteEnter (to, from, next) {
      console.log('App-->beforeRouteEnter');
      console.log('to ==> ', to);
      console.log('from ==> ', from);
      if (to.meta.isAuth) {//判断是否需要进行鉴权
        if (localStorage.getItem('school') === 'linshio') {
          next()
        } else {
          alert('无权限')
        }
      } else {
        next()
      }
    },
    //通过路由规则，离开该组件中被调用
    beforeRouteLeave (to, from, next) {
      console.log('App-->beforeRouteLeave');
      console.log('to ==> ', to);
      console.log('from ==> ', from);
      next()
    }
  }
</script>
