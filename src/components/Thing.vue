<template>
    <div>
        <p>Hello. {{ message }}</p>
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
