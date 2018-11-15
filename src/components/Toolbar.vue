<script>
import {
  VToolbarTitle,
  VSpacer,
  VToolbarSideIcon,
  VToolbarItems,
  VTabs,
  VBtn,
  VIcon,
  VMenu,
  VToolbar
} from 'vuetify/lib'

export default {
  name: 'Toolbar',
  components: {
    VToolbarTitle,
    VSpacer,
    VToolbarSideIcon,
    VToolbarItems,
    VTabs,
    VBtn,
    VIcon,
    VMenu,
    VToolbar
  },
  render (el) {
    const title = el('v-toolbar-title', [...this.$slots.title])
    const spacer = el('v-spacer')

    // start building list of child elements
    const children = [title, spacer]

    if (!this.hideNavToggle) {
      const hamburger = el('v-toolbar-side-icon', {
        on: {
          click: this.toggleNav
        }
      })
      children.unshift(hamburger)
    }

    if (this.hasButtons) {
      children.push(el('v-toolbar-items', {
        slot: this.slotBinding
      }, [...this.$slots.buttons]))
    }
    if (this.hasExtra) {
      children.push(el('template', {
        slot: 'extension'
      }, [...this.$slots.extra]))
    }
    if (this.hasTabs) {
      children.push(el('v-tabs', {
        props: {
          alignWithTitle: !this.screenIsLarge,
          color: 'transparent',
          value: this.tab
        },
        on: {
          input: val => this.$emit('update:tab', val)
        },
        slot: 'extension'
      }, [...this.$slots.tabs]))
    }
    if (this.hasFabs) {
      children.push(...this.$slots.fabs)
    }

    if (this.hasMenu) {
      const btn = el('v-btn', {
        props: {
          icon: true
        },
        slot: 'activator'
      }, [el('v-icon', {}, ['more_vert'])])
      children.push(el('v-menu', {
        props: {
          left: true,
          top: true
        }
      }, [btn, ...this.$slots.menu]))
    }

    return el('v-toolbar', {
      props: {
        tabs: this.hasTabs,
        app: true,
        fixed: true
      }
    }, children)
  },
  props: {
    hideNavToggle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    tab: {
      default: null
    }
  },
  data () {
    return {}
  },
  methods: {
    toggleNav () {
    }
  },
  computed: {
    slotBinding () {
      return this.extended ? 'extension' : undefined
    },
    hasTabs () {
      if (this.loading) return false
      return this.$slots.tabs && this.$slots.tabs.length > 0
    },
    hasMenu () {
      if (this.loading) return false
      return this.$slots.menu && this.$slots.menu.length > 0
    },
    hasExtra () {
      if (this.loading) return false
      return this.$slots.extra && this.$slots.extra.length > 0
    },
    hasButtons () {
      if (this.loading) return false
      return this.$slots.buttons && this.$slots.buttons.length > 0
    },
    hasFabs () {
      if (this.loading) return false
      return this.$slots.fabs && this.$slots.fabs.length > 0
    },
    extended () {
      return this.screenIsMobile || !this.hasExtra
    }
  }
}
</script>
