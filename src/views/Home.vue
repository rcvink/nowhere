<template>
  <div class="home">
    <Terminal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Terminal from '@/components/Terminal.vue';

@Component({
  components: {
    Terminal,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: 100%
}
</style>
