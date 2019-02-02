<template>
    <div class="monitor-container container monitor">
        <History class="history-child" :initialStatements="statements"/>
        <Input 
            class="input-child container input-container" 
            @input="handleInput"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import History from '@/components/History.vue';
import Input from '@/components/Input.vue';
import Story from '@/static/story.json';

export default Vue.extend({
    name: 'Monitor',
    components: {
        History,
        Input,
    },
    data() {
        return {
            statements: ['Nowhere'],
        };
    },
    methods: {
        handleInput(statement: string) {
            this.statements.push(statement);
        },
    },
});

</script>

<style scoped lang="scss">
.monitor {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 95vh;
    max-height: 95vh;
    cursor: crosshair;
}

.monitor-container {
    flex-direction: column;
    justify-content: flex-start;
}

.container {
    display: flex;
}

.input-container {
    flex-direction: column;
}

.input-child {
    flex-grow: 1000;
}

.history-child {
    flex-grow: 1
}
</style>