<template>
  <div class="row mg">
    <div class="col-md-6">
      <el-tree :data="menus" :props="props" show-checkbox default-expand-all ref="tree" @node-click="nodeClick"></el-tree>
    </div>

    <div class="col-md-6 box">
      <div class="row">
        <div class="col-md-6">
          <v-input name="name" label="名称" validate="required" v-model="form.name"/>
          <v-input name="authUrl" label="权限路径" v-model="form.authUrl"/>
        </div>
        <div class="col-md-6">
          <v-input name="authCode" label="编码" validate="required" v-model="form.authCode"/>
          <v-input name="parentName" label="上级菜单" validate="required" v-model="form.parentName"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from '../../vuestic-theme/vuestic-components/v-input/VInput'
export default {
  name: 'MenuList',
  components: { VInput },
  data: function () {
    return {
      menus: [
        {
          id: 4,
          label: '后台管理系统',
          children: [{ id: 7, label: 'Cables' }, {
            id: 8,
            label: 'Cables',
            children: [{ id: 7, label: 'Cables' }, { id: 8, label: 'Cables' }],
          }],
        },
      ],
      form: {
        id: '',
        name: '',
        authCode: '',
        authUrl: '',
        type: '1',
        parentName: '',
      },
      props: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {
    nodeClick (node) {
      console.log(node)
    }
  }
}
</script>

<style scoped>

</style>
