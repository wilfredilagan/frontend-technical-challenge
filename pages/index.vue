<template>
  <div class="text-center font-body2 px-4">
    <h1 class="font-normal font-display text-3xl max-w-md mx-auto mb-4">{{ $siteConfig.page.title }}</h1>
    <p class="px-4 max-w-xs font-body1 text-lg max-w-2xl mx-auto">{{ $siteConfig.page.description }}</p>
    <h6
      class="font-body1 text-sm mt-6 mb-12 md:mb-16"
    >{{ $siteConfig.page.products.length }} products</h6>
    <div>
      <div class="flex flex-wrap md:-mx-4 mb-4">
        <product-card
          v-for="(product, i) in $siteConfig.page.products"
          :key="i"
          :product="product"
          class="md:w-1/4 md:px-4 pb-12"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '#components/product-card'

export const data = {
  layout: 'index'
}

export default {
  name: 'index',
  props: ['content'],
  components: {
    ProductCard
  },
  mounted() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.lazyLoad)
  },
  methods: {
    lazyLoad: function () {
      let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
      let active = false
      if (active === false) {
        active = true
        setTimeout(() => {
          lazyImages.forEach(function (lazyImage) {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== 'none'
            ) {
              lazyImage.src = lazyImage.dataset.src
              lazyImage.classList.remove('lazy')
              lazyImages = lazyImages.filter(function (image) {
                return image !== lazyImage
              })

              if (lazyImages.length === 0) {
                window.removeEventListener('scroll', this.lazyLoad)
              }
            }
          })
          active = false
        }, 200)
      }
    }
  }
}
</script>
