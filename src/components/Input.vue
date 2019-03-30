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
import IScene from '@/models/IScene';

export default Vue.extend({
    name: 'Input',
    methods: {
        handleSubmit() {
            if (this.isValidInput(this.statement)) {
                const command = this.getCommand(this.statement);
                this.$emit('validInput', this.statement, command);
            }
            this.clearStatement();
        },
        clearStatement() {
            this.statement = '';
        },
        isValidInput(statement: string) {
            return this.scene.commands
                .map((x) => x.input)
                .includes(statement.toLowerCase());
        },
        getCommand(statement: string) {
            return this.scene.commands
                .find((command) => command.input === statement.toLowerCase());
        },
    },
    data() {
        return {
            statement: '',
            scene: this.currentScene as IScene,
        };
    },
    props: ['currentScene'],
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