<template>
  <div class="row mg">
    <div class="col-md-6">
      <vuestic-tree-root ref="treeView">
        <v-tree :model="menu" v-for="menu in menus" :key="menu.id"/>
      </vuestic-tree-root>
    </div>

    <div class="col-md-6 box">
      <div class="row">
        <div class="col-md-12">
          <v-input :name="name" label="名称" validate="required" v-model="name"/>
          <v-input :name="parentId" label="上级" readonly/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTree from './v-tree/v-tree'
export default {
  name: 'MenuList',
  components: { VTree },
  data () {
    return {
      menus: [
        { id: 4, name: '后台管理系统', children: [{ id: 7, name: 'Cables' }, { id: 8, name: 'Cables', children: [{ id: 7, name: 'Cables' }, { id: 8, name: 'Cables' }]children: [{ id: 7, name: 'Cables' }, { id: 8, name: 'Cables' }] }] },
        { id: 5, name: '菜单2' },
        { id: 6, name: 'Keyboards' },
      ],
      parentId: '',
      name: '',
      xx: 'xxx'
    }
  },
  mounted: function () {
    this.$refs.treeView.expand()
  },
  methods: {
    nodeClick (node) {
      console.log(node)
    }
  }
}
</script>

<style scoped>
.vuestic-tree-root{
  background-color: white;
}

.box {
  background-color: white;
}

.mg {
  height: calc(100vh - 160px);
  margin-right: 0px;
}
</style>
