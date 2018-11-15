<template>
    <div>
        <h1>Hello.</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
  name: 'Thing',
  props: {
    message: String
  },
  data () {
    return {}
  }
}
</script>
