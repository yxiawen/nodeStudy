<template>
  <div class="register">
    <div class="singupBox">
      <Modal
        v-model="showModel"
        :mask='false'
        :footer-hide='true'
        @on-visible-change='closeModel'
        title="SingUp"
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
              prop="email"
              style="width: 100%"
            >
              <Input
                type="text"
                v-model="formInline.email"
                placeholder="Email"
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
            <FormItem
              prop="passwdCheck"
              style="width: 100%"
            >
              <Input
                type="password"
                v-model="formInline.passwdCheck"
                placeholder="passwdCheck"
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
              >SingUp</Button>
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
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('输入密码！'));
      } else {
        if (this.formInline.passwdCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwdCheck');
        }
        callback();
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('再次输入密码！'));
      } else if (value !== this.formInline.password) {
        callback(new Error('输入的密码不一致！'));
      } else {
        callback();
      }
    }
    return {
      showModel: true,
      formInline: {
        user: '',
        password: '',
        email: '',
        passwdCheck: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '用户名不能为空！', trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空！', trigger: 'blur' },
          { type: 'email', message: '输入正确的邮箱！', trigger: 'blur' }
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
