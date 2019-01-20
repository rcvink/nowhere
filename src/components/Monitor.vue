<template>
    <div class="monitor">
        <History :statements="statements"/>
        <Input class="input" @input="handleInput"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import History from '@/components/History.vue';
import Input from '@/components/Input.vue';

export default Vue.extend({
    name: 'Monitor',
    components: {
        History,
        Input,
    },
    data() {
        return {
            statements: ['Hello 1', 'Hello 2'],
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
    height: 720px;
}

.input {
    float: left;
}
</style>