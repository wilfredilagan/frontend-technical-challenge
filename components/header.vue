<template>
  <div class="px-5 header h-16 font-body2 w-full flex justify-between items-center">
    <a href="javascript::void(0)" class="block md:hidden">
      <icon type="menu" />
    </a>
    <ul class="md:flex hidden">
      <li
        v-for="(link, i) in $siteConfig.header.primary"
        :key="i"
        class="tracking-wide uppercase font-medium mr-5 my-5 text-base"
      >
        <a :href="link.link">{{ link.title }}</a>
      </li>
    </ul>
    <div class="absolute left-0 right-0 mx-auto" :style="{width: '40px', height: '30px'}">
      <icon type="logo" />
    </div>
    <ul class="md:flex hidden">
      <li
        v-for="(link, i) in $siteConfig.header.secondary"
        :key="i + 4"
        class="tracking-wide uppercase font-medium ml-5 my-5"
      >
        <a :href="link.link">{{ link.title }}</a>
      </li>
    </ul>
    <a href="javascript::void(0)" class="block md:hidden">
      <icon type="bag" />
    </a>
  </div>
</template>

<script>
import Icon from '#components/icon'

export default {
  name: 'main-header',
  components: {
    Icon
  }
}
</script>
