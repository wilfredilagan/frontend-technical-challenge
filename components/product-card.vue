<template>
  <div @mouseover="isHovering = true" @mouseleave="isHovering = false">
    <div class="text-left">
      <transition name="fade">
        <lazy-image :src="product.images.main" v-if="isHovering"/>
        <lazy-image :src="product.images.secondary" v-else/>
      </transition>
      <div class="flex flex-col">
        <div class="flex">
          <div class="w-1/2 text-left font-display text-xl">{{ product.title }}</div>
          <div class="w-1/2 text-right font-display text-xl"> {{ product.price }}</div>
        </div>
        <div class="flex">
          <div class="w-1/2 text-left font-body1 text-xs">{{ product.byline }}</div>
          <div class="w-1/2 text-right font-body1 text-xs">
            <ReviewStars :stars="product.reviews.average"/>
            <div>{{ '(' + product.reviews.count + ' Reviews)' }}</div>
          </div>
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
