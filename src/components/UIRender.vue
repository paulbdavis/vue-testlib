<script>
import {
  VBtn,
  VIcon
} from 'vuetify/lib'

export default {
  name: 'Toolbar',
  components: {
    VBtn,
    VIcon
  },
  render (el) {
    return el('v-btn', {
      props: {
        icon: true
      },
      slot: 'activator'
    }, [el('v-icon', {}, ['home'])])
  },
  props: {
  },
  data () {
    return {}
  }
}
</script>
