<template>
  <div class="form-group with-icon-right" :class="{'has-error': errors.has(name)}">
    <div class="input-group" v-if="type==='input'" >
      <label class="form-label">{{label| translate}} </label>
      <input :id="name"
             :name="name"
             v-bind:value="value"
             :placeholder="placeholder"
             v-on:input="$emit('input', $event.target.value)"
             v-validate="validate"
             v-bind:readonly="isReadOnly"
      />
      <i class="bar"></i>
      <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
      <i class="fa fa-check valid-icon icon-right input-icon"></i>
      <small :v-show="errors.has(name)" class="icon-right10 help text-danger input-icon">{{ errors.first(name) }}</small>
    </div>
    <div class="input-group" v-else>
      <label class="form-label">{{label| translate}} </label>
      <slot />
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
    type: {
      type: String,
      default: ''
    },
    validate: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: null
    },
    isReadOnly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    }
  },
}
</script>

<style scoped>

</style>
