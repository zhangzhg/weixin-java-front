<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget class="no-padding no-v-padding">
        <vuestic-breadcrumbs  v-on="$listeners" :current-path="currentRoute"/>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app-breadcrumbs',
  props: {
    breadcrumbs: {
      type: Object
    }
  },
  computed: {
    currentRoute () {
      return this.$route
    }
  }
}

</script>
