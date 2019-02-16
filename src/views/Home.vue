<template>
  <div class="home">
    <Terminal />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Terminal from '@/components/Terminal.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Terminal,
  },
});
</script>

<style lang="scss" scoped>
.home {
  height: 100%
}
</style>
