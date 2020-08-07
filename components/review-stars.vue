<template>
  <div class="flex review-stars" :style="{width: `60px`, height: `9px`}">
    <!-- fill in here -->
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