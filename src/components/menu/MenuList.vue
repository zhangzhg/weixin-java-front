<template>
  <div class="row mg">
    <div class="col-md-6">
      <el-tree :data="menus" :props="props" show-checkbox default-expand-all ref="tree" @node-click="nodeClick"></el-tree>
    </div>

    <div class="col-md-6 box">
      <div class="row">
        <div class="col-md-12">
          <v-input name="name" label="名称" validate="required" v-model="form.name"/>
          <v-input name="parentId" label="上级"  readonly/>
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
  data () {
    return {
      menus: [
        { id: 4, label: '后台管理系统', children: [{ id: 7, label: 'Cables' }, { id: 8, label: 'Cables', children: [{ id: 7, label: 'Cables' }, { id: 8, label: 'Cables' }] }] }
      ],
      form: {
        id: '',
        name: ''
      },
      props: {
        children: 'children',
        label: 'label'
      }
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
