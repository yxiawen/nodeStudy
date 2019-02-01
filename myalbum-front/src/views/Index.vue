<template>
  <div class="home">
    <div class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu
          active-name="1-1"
          theme="dark"
          width="auto"
          :open-names="['1']"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              我的相册
            </template>
            <MenuItem
              name="1-1"
              @click.native='users'
            >用户管理</MenuItem>
            <MenuItem
              name="1-2"
              @click.native="album"
            >相册管理</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{marginLeft: '200px'}">
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          <div class="logOut"><Button type="primary">登出</Button></div>
        </Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <!-- <BreadcrumbItem>
              <router-link to="/">Home</router-link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <router-link to="/about">About</router-link>
            </BreadcrumbItem> -->
          </Breadcrumb>
          <Card>
            <div style="height: 600px">
              <router-view />
            </div>
          </Card>
        </Content>
      </Layout>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  methods: {
    users() {
      this.$router.push({
        name: 'photo'
      })
    },
    album() {
      this.$router.push({
        name: 'about'
      })
    }
  },
  components: {}
}
</script>
