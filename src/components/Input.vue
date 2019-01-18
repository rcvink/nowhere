<template>
    <div>
        <form>
            <input class="input" type="text" v-model="statement" @keyup.enter="handleSubmit" @keydown.prevent>
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