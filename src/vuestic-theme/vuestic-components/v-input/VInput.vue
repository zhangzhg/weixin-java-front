<template>
  <div v-if="validate" class="form-group with-icon-right" :class="{'has-error': errors.has(name)}">
    <div class="input-group">
      <label class="form-label" :for="name">{{name| translate}} </label>
      <input :id="name" :name="name" v-bind:value="value"
             v-on:input="$emit('input', $event.target.value)" v-validate="validate" :disabled="disabled" required/>
      <i class="bar"></i>
      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
      <i class="fa fa-check valid-icon icon-right input-icon"></i>
      <small :v-show="errors.has(name)"  class="help text-danger">{{ errors.first(name) }}</small>
    </div>
  </div>
  <div v-else class="form-group">
    <div class="input-group">
      <label class="form-label" :for="name">{{name| translate}} </label>
      <input v-if="disabled" :id="name" :name="name" v-model="value" :disabled="disabled"/>
      <input v-else :id="name" :name="name" v-model="name"/>
      <i class="bar"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-input',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    validate: {
      type: String,
      default: 'required'
    },
    value: {
      type: String,
      default: null
    }
  },
}
</script>

<style scoped>

</style>
