<template>
  <div>
    <div class="text-left" @mouseover="isHovering = true" @mouseleave="isHovering = false">
      <transition name="fade">
        <lazy-image :src="product.images.main" v-if="isHovering"/>
        <lazy-image :src="product.images.secondary" v-else/>
      </transition>
      <div class="flex flex-col pt-4">
        <div class="flex">
          <div class="w-1/2 text-left font-display text-xl">{{ product.title }}</div>
          <div class="w-1/2 text-right font-body1 text-base tracking-tight pt-1" v-if="checkForSale(product.sale)">{{ product.price + ' '}} <span class="line-through text-gray-500"> {{ product.price }} </span> </div> 
          <div class="w-1/2 text-right font-body1 text-base tracking-tight pt-1" v-else> {{ product.price }}</div>
        </div>
        <div class="flex">
          <div class="w-1/2 text-left font-body1 text-xs">{{ product.byline }}</div>
          <div class="w-1/2 text-right font-body1 text-xs">
            <ReviewStars :stars="product.reviews.average" />
            <div class="pt-1">{{ '(' + product.reviews.count + ' Reviews)' }}</div>
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
      isHovering: false,
    }
  },
  methods: {
    checkForSale: function(sale){
      if (sale){
        return true
      }
    }  
  }
}
</script>
