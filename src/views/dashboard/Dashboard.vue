<template>
  <div class="dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>

    <vuestic-widget class="no-padding no-v-padding">
    </vuestic-widget>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

export default {
  name: 'dashboard',
  components: {
    DashboardInfoWidgets,
    DashboardBottomWidgets
  },

  methods: {
  }
}

</script>
<style lang="scss" scoped>
</style>
