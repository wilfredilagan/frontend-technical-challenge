<template>
  <div class="flex review-stars ml-20" :style="{width: `60px`, height: `9px`}">
    <icon class="flex" type="starFull" v-for="n in stars" :key="n" />
    <icon class="flex" type="starEmpty" v-for="n in 5 - stars" :key="n" />
  </div>
</template>

<script>
import Icon from '#components/icon'

export default {
  name: 'review-stars',
  props: ['stars'],
  components: {
    Icon
  },
  computed: {}
}
</script>