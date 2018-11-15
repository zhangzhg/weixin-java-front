<template>
  <vuestic-modal :show.sync="show" ref="model" :okText="'确定' | translate"
                 :cancelText="'取消' | translate" @ok="ok" @cancel="cancel"  class="model">
    <div slot="title">{{title | translate}}</div>
    <div>
        {{content}}
        <slot></slot>
    </div>
  </vuestic-modal>
</template>

<script>
export default {
  name: 'model',
  data: function () {
    return {
      show: true,
      title: this.title,
      content: this.message
    }
  },
  mounted () {
    this.$refs.model.open()
  },
  methods: {
    ok () {
      let that = this
      this.close().then(() => {
        that.success()
      })
    },
    cancel () {
      this.close()
    },
    close () {
      let that = this
      let promise = new Promise(function (resolve, reject) {
        if (that.$el && that.$el.parentNode) {
          that.$el.parentNode.removeChild(that.$el)
        }
        resolve()
        that.$destroy()
      })
      that.afterClose && that.afterClose()
      return promise
    }
  }
}
</script>

<style>
  .modal-dialog {
    margin: 8.75rem auto;
  }
</style>
