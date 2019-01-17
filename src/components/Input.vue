<template>
    <div class="input">
        <form>
            <input type="text" v-model="statement">
            <input type="submit" v-on:click.prevent="handleSubmit">
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
    props: {
        display: {
            default: undefined,
            type: String,
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
    color: rgb(192, 192, 192);
    text-align: left;
    text-transform: uppercase;
}
</style>