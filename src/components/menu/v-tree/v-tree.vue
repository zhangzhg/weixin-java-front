<template>
  <vuestic-tree-category v-if="model.children" :label="model.name">
    <v-tree isOpen :model="menu" v-for="menu in model.children" :key="menu.id" />
  </vuestic-tree-category>
  <vuestic-tree-node v-else>
    <div slot="icon" class="icon">
      <span aria-hidden="true" class="ion ion-md-image"/>
    </div>
    {{ model.name }}
    <slot name="nodeButton" :data="model"></slot>
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
