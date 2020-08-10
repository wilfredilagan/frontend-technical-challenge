<template>
  <div>
    <img src="../static/placeholder-image.png" :data-src="src" class="lazy" />
  </div>
</template>

<script>
export default {
  name: 'lazy-image',
  props: ['src']
}
</script>
