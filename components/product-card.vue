<template>
  <div @mouseover="isHovering = true" @mouseleave="isHovering = false">
    <div class="text-left">
      <transition name="fade">
        <lazy-image :src="product.images.main" v-if="isHovering" />
        <lazy-image :src="product.images.secondary" v-else />
      </transition>
      <div class="flex flex-col">
        <div class="flex">
          <div class="w-1/2 text-left font-display">{{ product.title }}</div>
          <div class="w-1/2 text-right font-display"> {{ product.price }}</div>
        </div>
        <ReviewStars />
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
  },
}
</script>
