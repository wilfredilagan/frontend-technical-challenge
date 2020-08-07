<template>
  <div class="icon" :style="{width: `${paths[type].width}px`, height: `${paths[type].height}px`}">
    <svg
      class="h-full w-full"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      :viewBox="paths[type].viewport"
      xml:space="preserve"
    >
      <path :d="paths[type].path" />
    </svg>
  </div>
</template>

<script>
import * as paths from '#components/lib/paths'

export default {
  name: 'icon',
  props: ['type'],
  data() {
    return {
      paths
    }
  }
}
</script>
