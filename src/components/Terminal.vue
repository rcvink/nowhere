<template>
    <div class="terminal-container container terminal">
        <History 
            class="history-child" 
            :initialStatements="state.statements"/>
        <Input 
            class="input-child container input-container" 
            :input-service="inputService"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import History from '@/components/History.vue';
import Input from '@/components/Input.vue';
import IState from '@/models/IState';
import State from '@/models/State';
import PrintService from '@/services/PrintService';
import IPrintService from '@/services/IPrintService';
import AudioService from '@/services/AudioService';
import IAudioService from '@/services/IAudioService';
import IInputService from '@/services/IInputService';
import InputService from '@/services/InputService';
import scenes from '@/static/scenes.json';

export default Vue.extend({
    name: 'Terminal',
    components: {
        History,
        Input,
    },
    mounted() {
        this.audioService = new AudioService() as IAudioService;
        this.printService = new PrintService(this.state) as IPrintService;
        this.inputService = new InputService(
            this.state,
            this.printService,
            this.audioService) as IInputService;
        this.printService.printAnimated(this.state.scene.text);
        this.printService.printAnimated(this.inputService.getValidInputs());
    },
    data() {
        return {
            state: new State(scenes) as IState,
            printService: Object() as IPrintService,
            audioService: Object() as IAudioService,
            inputService: Object() as IInputService,
        };
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