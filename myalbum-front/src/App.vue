<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
.ivu-breadcrumb {
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #2d8cf0;
    }
  }
}
.logOut {
  text-align: right;
}
</style>
