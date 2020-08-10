<template>
  <div>
    <img
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'%3E%3C/svg%3E"
      :data-src="src"
      class="lazy"
    />
  </div>
</template>

<script>
export default {
  name: 'lazy-image',
  props: ['src']
}
</script>
