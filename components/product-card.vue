<template>
  <div>
    <div class="text-left">
      <transition name="fade">
        <lazy-image :src="product.images.main" v-if="isHovering" />
        <lazy-image :src="product.images.secondary" v-else />
      </transition>
      <div class="flex">
        <!-- fill in here -->
    </div>
  </div>
</template>

<script>
import LazyImage from '#components/lazy-image'
import ReviewStars from '#components/review-stars'

export default {
  name: 'product-card',
  props: ['product'],
  components: {
    LazyImage,
    ReviewStars
  },
  data() {
    return {
      isHovering: false
    }
  }
}
</script>
