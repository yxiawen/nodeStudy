<template>
  <div class="login">
    <div class="loginBox">
      <Modal
        v-model="showModel"
        :mask='false'
        :footer-hide='true'
        @on-visible-change='closeModel'
        title="Login"
      >
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          inline
        >
          <div>
            <FormItem
              prop="user"
              style="width: 100%"
            >
              <Input
                type="text"
                v-model="formInline.user"
                placeholder="Username"
              >
              <Icon
                type="ios-person-outline"
                slot="prepend"
              ></Icon>
              </Input>
            </FormItem>
          </div>
          <div>
            <FormItem
              prop="password"
              style="width: 100%"
            >
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="Password"
              >
              <Icon
                type="ios-lock-outline"
                slot="prepend"
              ></Icon>
              </Input>
            </FormItem>
          </div>
          <div class="modelBottom">
            <FormItem style="width: 100%;text-align: center">
              <Button
                type="primary"
                @click="handleSubmit('formInline')"
              >Login</Button>
              <router-link :to="{
                name:'register'
              }">SingUp</router-link>
            </FormItem>
          </div>
        </Form>
      </Modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModel: true,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '用户名不能为空！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'blur' },
          { type: 'string', min: 6, message: '请输入6位数的密码！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    closeModel(e) {
      console.log(e)
      if (e === false) {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style scoped>
.login {
  text-align: center;
}
</style>
