<template>
  <div class="row mg">
    <div class="col-md-6">
      <vuestic-tree-root>
        <vuestic-tree-category label="Products">
          <vuestic-tree-node isOpen v-for="product in products" :key="product.id">
            {{ product.name }}
          </vuestic-tree-node>
        </vuestic-tree-category>
      </vuestic-tree-root>
    </div>

    <div class="col-md-6 box">
      <div class="row">
        <div class="col-md-12">
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
              <label class="form-label" for="parentId">{{'上级'| translate}} </label>
              <input id="parentId" name="parentId" v-model="parentId" readonly/>
              <i class="bar"></i>
            </div>
          </div>
          <v-input name="xx" label="哈哈" validate="required" v-model="xx"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data () {
    return {
      products: [
        { id: 4, name: 'Cables', selected: false },
        { id: 5, name: 'Monitors', selected: false },
        { id: 6, name: 'Keyboards', selected: false },
      ],
      parentId: '',
      name: '',
      xx: 'xxx'
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
