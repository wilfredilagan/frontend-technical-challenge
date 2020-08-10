<template>
  <div>
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: 'lazy-image',
  props: ['src']
}
</script>
