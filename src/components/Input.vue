<template>
    <div>
        <div class="form container form-child">
            <textarea 
                autofocus="true"
                class="input input-child"
                type="text" 
                v-model="statement"
                v-on:keydown.enter="handleSubmit" 
                v-on:keydown.enter.prevent>
            </textarea>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Services from '@/services';

export default Vue.extend({
    name: 'Input',
    methods: {
        handleSubmit() {
            Services.inputService.handleInput(this.statement);
            this.clearTextArea();
        },
        clearTextArea() {
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
    outline: none;
    text-align: left;
    font-size: 1em;
}

.container {
    display: flex;
}

.form-child {
    flex-grow: 1000;
}

.input-child {
    flex-grow: 1000;
    height: 100%;
}
</style>