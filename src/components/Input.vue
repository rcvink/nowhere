<template>
    <div>
        <form>
            C:\><input type="text" v-model="statement" v-on:keydown.enter="handleSubmit" v-on:keydown.enter.prevent v-on:blur="this.focus()">
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
            this.clearStatement();
        },
        clearStatement() {
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
@import url('https://fonts.googleapis.com/css?family=VT323');

form {
    font-family: 'VT323', monospace;
    color: rgb(192, 192, 192);
    font-size: 1.5em;
}

input[type=text] {
    background-color: black;
    border: none;
    color: rgb(192, 192, 192);
    font-family: 'VT323', monospace;
    text-align: left;
    text-transform: uppercase;
    font-size: 1em;
}

input:focus {
    outline: none;
}
</style>