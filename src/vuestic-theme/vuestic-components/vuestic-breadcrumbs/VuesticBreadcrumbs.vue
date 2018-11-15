<template>
  <div class="vuestic-breadcrumbs">
    <div class="vuestic-breadcrumbs__nav-section">
      <router-link
        class="vuestic-breadcrumbs__nav-section-item"
        :to="{ name: 'dashboard' }">
        首页
      </router-link>
      <router-link
        v-for="(item, index) in displayedCrumbs"
        :to="{ path: item.path }"
        :key="index"
        class="vuestic-breadcrumbs__nav-section-item"
        >
        {{ $t(item.name) }}
      </router-link>
    </div>
    <div class="vuestic-breadcrumbs__help-section">
      <a
        target="_blank"
        href="javascript:void(0)"
        @click="reload"
        class="btn btn-micro btn-info"
      >
        <span class="entypo entypo-arrows-ccw">刷新</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-breadcrumbs',
  props: {
    breadcrumbs: {
      type: Object,
      default: () => ({}),
    },
    currentPath: {
      type: Object,
      default: null,
    },
  },
  computed: {
    displayedCrumbs () {
      return this.findInNestedByName(this.currentPath)
    }
  },
  methods: {
    findInNestedByName (route) {
      if (typeof route === 'undefined') {
        return
      }
      return route.matched
    },
    reload () {
      this.$emit('reload')
    }
  },
}
</script>

<style lang='scss'>
.vuestic-breadcrumbs {
  min-height: $breadcrumbs-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .vuestic-breadcrumbs__nav-section-item {
    color: $text-gray;
    &:hover {
      color: $brand-primary;
    }
    text-transform: capitalize;
    &.disabled {
      pointer-events: none;
    }
    &:last-child::after {
      display: none;
    }
    &::after {
      padding: 0 5px;
      display: inline-block;
      content: $breadcrumbs-arrow-content;
      vertical-align: middle;
      color: $brand-primary;
      font-size: $breadcrumbs-arrow-font;
      font-family: FontAwesome;
    }
  }
  .vuestic-breadcrumbs__help-section {
    .vuestic-icon {
      font-size: 20px;
    }
  }
}
</style>
