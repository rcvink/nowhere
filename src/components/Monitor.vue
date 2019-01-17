<template>
    <div class="monitor">
        <p>
            This is the monitor.
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Monitor extends Vue {

}

</script>

<style scoped lang="scss">
.monitor {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 1080px;
}
</style>