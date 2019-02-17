<template>
  <div class="home">
    <Terminal class="terminal"/>
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

.terminal {
  margin: calc(10px + 0.1%);
}
</style>
