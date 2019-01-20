<template>
  <div class="row mg">
    <div class="col-md-6">
      <el-tree class="box" :data="menus" node-key="id" :props="treeProps" show-checkbox default-expand-all ref="tree" @node-click="nodeClick" :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span class="right10">{{ node.label }}</span>
          <span v-if="data.id!=1">
            <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
              新增
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              删除
            </el-button>
          </span>
        </span>
      </el-tree>
    </div>

    <div class="col-md-6 box">
      <div class="row">
        <div class="col-md-6">
          <v-input name="name" type="input" label="名称" validate="required" v-model="form.name"/>
          <v-input name="authUrl" type="input" label="权限路径" placeholder="parentCode/code/*" validate="required" v-model="form.authUrl"/>
          <v-input type="radio" label="资源类型">
            <div class="form_row">
              <vuestic-radio-button name="type" class="right30" value="1" v-model="form.type" label="菜单" />
              <vuestic-radio-button name="type" class="right30" value="2" v-model="form.type" label="功能" />
            </div>
          </v-input>
        </div>
        <div class="col-md-6">
          <v-input  name="authCode" type="input" label="编码" validate="required" v-model="form.authCode"/>
          <v-input type="input" label="上级菜单"  v-model="form.parentName" isReadOnly/>
        </div>
      </div>
      <div class="row left10">
        <button type="button" class="btn btn-primary btn-micro">保存</button>
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
          id: 1,
          name: '后台管理系统',
          children: [{ id: 7, name: '首页面板' }, {
            id: 8,
            name: '系统管理',
            children: [{ id: 9, name: '用户管理' }, { id: 10, name: '菜单管理' }],
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
      treeProps: {
        children: 'children',
        label: 'name',
      },
    }
  },
  methods: {
    nodeClick (node) {
      this.form.name = node.name
      this.form.authCode = String(node.id)
      console.log(node)
    },
    append (data) {
      console.log(data)
    },
    remove (node, data) {
      console.log(node)
    },
  }
}
</script>

<style scoped>

</style>
