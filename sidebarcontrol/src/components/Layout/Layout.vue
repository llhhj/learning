<template>
  <div class="containBox">
    <AppNavHeader />
    <AppSideBar /> 
    <router-view></router-view>
    <AppFooter class="footer" />
  </div>
</template>

<script>
import AppNavHeader from './component/AppNavHeader'
import AppSideBar from './component/AppSideBar'
import AppFooter from './component/AppFooter'
export default {
  name: "Layout",
  components: {
    AppNavHeader,
    AppSideBar,
    AppFooter
  }
};
</script>

<style scoped>
/* .containBox{
    position: relative;
} */

.footer{
    position: absolute;
    width: 100%;
}
</style>