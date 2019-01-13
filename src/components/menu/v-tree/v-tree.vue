<template>
  <vuestic-tree-category v-if="model.children" :label="model.name">
    <v-tree isOpen :model="menu" v-for="menu in model.children" :key="menu.id" :parentId="model.id">
        <template slot="{{menu.id}}" scope="props">
          <slot name="{{parentId}}" :data="props.data"></slot>
        </template>
    </v-tree>
  </vuestic-tree-category>
  <vuestic-tree-node v-else>
    <div slot="icon" class="icon">
      <span aria-hidden="true" class="ion ion-md-image"/>
    </div>
    {{ model.name }}
    <slot name="{{parentId}}" :data="model"></slot>
  </vuestic-tree-node>
</template>

<script>
export default {
  name: 'v-tree',
  props: {
    label: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default: null
    },
    parentId: {
      type: Number,
      default: null
    },
  },
  methods: {
    clickNode (nodeData) {
      this.$emit('clickNode', nodeData)
    }
  }
}
</script>

<style scoped>

</style>
