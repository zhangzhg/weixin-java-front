<template>
<div>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget >
        <form ref="userForm" @submit.prevent="onSave" href="/users/save">
          <div class="row">
            <div class="col-md-6">
              <fieldset>
                <div class="form-group with-icon-right" :class="{'has-error': errors.has('account')}">
                  <div class="input-group">
                    <label class="form-label" for="simple-input">{{'账户'| translate}}</label>
                    <input id="simple-input"  v-model="account"  name="account" v-validate="'required'" required/>
                    <i class="bar"></i>
                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <small v-show="errors.has('account')"  class="help text-danger">{{ errors.first('account') }}</small>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <label class="form-label" for="qq">{{'QQ'| translate}} </label>
                    <input id="qq" name="qq" v-model="qq" />
                    <i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <label class="form-label" for="phone">{{'手机'| translate}} </label>
                    <input id="phone" name="phone" v-model="phone"/>
                    <i class="bar"></i>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="col-md-6">
              <fieldset>
                <div class="form-group with-icon-right" :class="{'has-error': errors.has('name')}">
                  <div class="input-group">
                    <label class="form-label" for="name">{{'名称'| translate}} </label>
                    <input id="name" name="name" v-model="name" v-validate="'required'" required="required"/>
                    <i class="bar"></i>
                    <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <small v-show="errors.has('name')"  class="help text-danger">{{ errors.first('name') }}</small>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <label class="form-label" for="wechatNo">{{'微信'| translate}} </label>
                    <input id="wechatNo" name="wechatNo" v-model="wechatNo" />
                    <i class="bar"></i>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group spec-group">
                      <vuestic-checkbox
                        label="启用"
                        name="checked"
                        id="checked"
                        v-model="checked"
                        :isCircle="true"
                      />
                    <i class="bar"></i>
                  </div>
                </div>
              </fieldset>
            </div>

            <div class="row item-right">
              <div class="col-md-12 btn-right">
                <button class="btn btn-primary btn-sm btn-margin" type="submit">保存</button>
                <button class="btn btn-primary btn-sm btn-margin"  @click.stop="onCancel()">取消</button>
              </div>
            </div>
          </div>
        </form>
      </vuestic-widget>
    </div>
  </div>
</div>
</template>

<script>
import { addUser } from '../../../api/api'

export default {
  name: 'UserForm',
  data () {
    return {
      account: '',
      name: '',
      phone: '',
      checked: true,
      wechatNo: '',
      qq: ''
    }
  },
  computed: {
    userStatus: function () {
      return this.checked ? '1' : 0
    },
  },
  methods: {
    onSave (e) {
      let params = {
        account: this.account,
        name: this.name,
        status: this.userStatus,
        phone: this.phone,
        wechatNo: this.wechatNo,
        qq: this.qq
      }

      addUser(params).then((res) => {
        let data = res.data
        if (data.success) {
          this.onCancel()
        }
      })
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style>
  .form-label{
    font-size: 1rem;
    color: #b3b3b3;
    font-weight: normal;
    text-transform: uppercase;
    top: -0.25rem;
  }

  .item-right, btn-right{
    width: 100%;
  }

  .btn-right {
    display: flex;
    justify-content: flex-end;
  }

  .btn-margin {
    margin-right: 20px;
  }

  .spec-group {
    margin-top: 17px;
  }
</style>
