<template>
  <div class="login">
    <div class="loginBox">
      <Modal
        v-model="showModel"
        :mask='false'
        :footer-hide='true'
        title="登录"
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
          <div>
            <FormItem style="width: 100%;text-align: center">
              <Button
                type="primary"
                @click="handleSubmit('formInline')"
              >Signin</Button>
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
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>
<style scoped>
.login {
  text-align: center;
}
</style>
