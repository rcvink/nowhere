<template>
    <div>
        <form>
            <input class="input" onsubmit="this.value=''" type="text" v-model="statement" @keyup.enter="handleSubmit" @keydown.enter.prevent>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Input',
    methods: {
        handleSubmit() {
            this.$emit('input', this.statement);
            this.statement = '';
        },
    },
    data() {
        return {
            statement: '',
        };
    },
});

</script>

<style scoped lang="scss">
.input {
    background-color: rgb(0, 0, 0);
    border: none;
    color: rgb(192, 192, 192);
    float: left;
    text-align: left;
    text-transform: uppercase;
}
</style>