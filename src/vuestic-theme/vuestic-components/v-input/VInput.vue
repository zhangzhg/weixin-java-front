<template>
  <div class="form-group with-icon-right" :class="{'has-error': errors.has(name)}">
    <div class="input-group">
      <label class="form-label" :for="name">{{label| translate}} </label>
      <input :id="name" :name="name" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" v-validate="validate"/>
      <i class="bar"></i>
      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
      <i class="fa fa-check valid-icon icon-right input-icon"></i>
      <small :v-show="errors.has(name)" class="icon-right10 help text-danger input-icon">{{ errors.first(name) }}</small>
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
    readonly: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    validate: {
      type: String,
      default: ''
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
