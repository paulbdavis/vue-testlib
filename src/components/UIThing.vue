<template>
    <v-flex v-bind="binding">
        <v-card
          :style="{'height': flexHeight ? 'auto' : '100%'}"
          class="tile"
          :class="classes">
            <v-card-title v-if="$slots.header">
                <slot name="header"></slot>
            </v-card-title>
            <slot name="bare"></slot>
            <v-card-text v-if="$slots.default">
                <slot></slot>
            </v-card-text>
            <slot name="bareFooter"></slot>
            <v-card-actions v-if="$slots.actions">
                <slot name="actions"></slot>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  name: 'UIThing',
  props: {
    sizes: {
      type: Object,
      default: () => ({})
    },
    classes: {
      type: Object,
      default: () => ({ gray: true, 'darken-2': true })
    },
    flexHeight: Boolean
  },
  data () {
    return {}
  },
  computed: {
    binding () {
      return this.sizes
    }
  }
}
</script>
