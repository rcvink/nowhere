<template>
  <div class="home">
    <Monitor />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Monitor from '@/components/Monitor.vue';

@Component({
  components: {
    Monitor,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: 100%
}
</style>
