<template>
    <div class="monitor">
        <History :statements="initialStatements"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import History from '@/components/History.vue';

@Component({
    components: {
        History,
    },
})
export default class Monitor extends Vue {
    private initialStatements = [
        'This is the first statement.',
        'This is the second statement.',
    ];
}

</script>

<style scoped lang="scss">
.monitor {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 1080px;
}
</style>