<template>
    <div v-on:click.once="onClick" class="terminal-container container terminal">
        <History class="history-child"/>
        <Input class="input-child container input-container"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import History from '@/components/History.vue';
import Input from '@/components/Input.vue';
import Models from '@/models';
import Services from '@/services';
const scenes = require('../static/scenes.json');

export default Vue.extend({
    name: 'Terminal',
    components: {
        History,
        Input,
    },
    mounted() {
        Models.state.scenes = scenes;
        Models.state.scene = Models.state.scenes[0];
        Services.printService.printScene(Models.state.scene);
    },
    methods: {
        onClick() {
            Services.audioService.playScene(Models.state.scene);
        },
    },
});

</script>

<style scoped lang="scss">
.terminal {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 95vh;
    max-height: 95vh;
    cursor: crosshair;
}

.terminal-container {
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