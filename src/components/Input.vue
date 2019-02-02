<template>
    <div>
        <div class="form container">
            <div class="leading-child">
                C:\>
            </div>
            <input 
                autofocus="true"
                class="input input-child"
                type="text" 
                v-model="statement" 
                v-on:keydown.enter="handleSubmit" 
                v-on:keydown.enter.prevent>
        </div>
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

.form {
    font-family: 'VT323', monospace;
    color: rgb(192, 192, 192);
    font-size: 1.5em;
    height: 100%;
}

.input {
    background-color: black;
    border: none;
    color: rgb(192, 192, 192);
    cursor: crosshair;
    font-family: 'VT323', monospace;
    height: 100%;
    text-align: left;
    text-transform: uppercase;
    font-size: 1em;
}

.container {
    display: flex;
}

.input-child {
    flex-grow: 1000;
}
</style>