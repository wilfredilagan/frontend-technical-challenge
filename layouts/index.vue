<template>
  <div class="antialiased">
    <div class="container mx-auto md:mb-20">
      <Header />
      <div class="mt-12">
        <slot name="default" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '#components/header'
import Footer from '#components/footer'

export default {
  name: 'page-layout',
  components: {
    Header,
    Footer
  }
}
</script>
