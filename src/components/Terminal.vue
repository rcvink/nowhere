<template>
    <div class="terminal-container container terminal">
        <History 
            class="history-child" 
            :initialStatements="state.statements"/>
        <Input 
            class="input-child container input-container" 
            :currentScene="state.scene"
            :state="state"
            @validInput="handleInput"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import History from '@/components/History.vue';
import Input from '@/components/Input.vue';
import IScene from '@/models/IScene';
import ICommand from '@/models/ICommand';
import IState from '@/models/IState';
import State from '@/models/State';
import PrintService from '@/services/PrintService';
import IPrintService from '@/services/IPrintService';
import AudioService from '@/services/AudioService';
import IAudioService from '@/services/IAudioService';

export default Vue.extend({
    name: 'Terminal',
    components: {
        History,
        Input,
    },
    mounted() {
        this.printService = new PrintService(this.state) as IPrintService;
        this.audioService = new AudioService() as IAudioService;
        this.printService.printAnimated(this.state.scene.text);
        this.printService.printAnimated(this.validInputs);
    },
    data() {
        return {
            state: new State() as IState,
            printService: Object() as IPrintService,
            audioService: Object() as IAudioService,
        };
    },
    methods: {
        handleInput(statement: string, command: ICommand) {
            this.setScene(command.goTo);
            this.printService.printInstantly(statement);
            this.audioService.play(command);
            this.printService.printAnimated(this.state.scene.text);
            this.printService.printAnimated(this.validInputs);
        },
        playInput(command: ICommand) {
            try {
                const path = require('./../assets/' + command.sounds[0]);
                const audio = new Audio(path);
                audio.play();
            } catch (error) {
                return;
            }
        },
        setScene(newSceneId: number) {
            const newScene = this.state.scenes.find((x) => x.id === newSceneId);
            if (newScene !== undefined) {
                this.state.scene = newScene;
            }
        },
    },
    computed: {
        validInputs(): string {
            return this.state.scene.commands
                .map((x) => x.input)
                .join(' | ');
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