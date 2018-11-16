<template>
    <v-toolbar app fixed>
        <v-toolbar-items>
            <v-btn>Foo</v-btn>
        </v-toolbar-items>
        <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
  name: 'UIToolbarPlain',
  data () {
    return {}
  },
  methods: {
    clicked () {
      console.log('foo')
    }
  }
}
</script>
