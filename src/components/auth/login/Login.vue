<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form ref="loginForm">
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="loginForm.account"  id="email" required="required"/>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="loginForm.password" id="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" @click.prevent="handleSubmit" :loading="logining">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' to="/auth/signup">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { requestLogin } from '../../../api/api'

export default {
  data () {
    return {
      logining: false,
      loginForm: {
        account: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    handleSubmit () {
      this.logining = true
      let loginParams = { username: this.loginForm.account, password: this.loginForm.password }
      requestLogin(loginParams).then(data => {
        this.logining = false
        let { msg, success, user, token } = data
        if (!success) {
          this.$message({
            message: msg,
            type: 'error'
          })
        } else {
          user.token = token
          sessionStorage.setItem('user', JSON.stringify(user))
          this.$router.push({ path: '/admin/dashboard' })
        }
      })
    }
  },
  name: 'login'
}
</script>

<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
