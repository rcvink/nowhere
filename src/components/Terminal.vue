<template>
    <div class="terminal-container container terminal">
        <History 
            class="history-child" 
            :initialStatements="state.statements"/>
        <Input 
            class="input-child container input-container" 
            :currentScene="state.scene"
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

export default Vue.extend({
    name: 'Terminal',
    components: {
        History,
        Input,
    },
    mounted() {
        this.printStory(this.state.scene.text);
        this.printStory(this.validInputs);
    },
    data() {
        return {
            state: new State() as IState,
        };
    },
    methods: {
        handleInput(statement: string, command: ICommand) {
            this.printInput(statement);
            this.playInput(command);
            this.setScene(command.goTo);
            this.printStory(this.state.scene.text);
            this.printStory(this.validInputs);
        },
        printStory(statement: string) {
            this.state.printChain = this.state.printChain.then(() => {
                return new Promise((resolve) => {
                    this.state.statements.push(statement[0]);
                    const chars = statement.split('');

                    for (let charIndex = 1; charIndex < chars.length; charIndex++) {
                        const char = chars[charIndex];
                        ((timeIndex) => {
                            setTimeout(() => {
                                let currentStatement = this.state.statements.pop();
                                currentStatement += char;
                                this.state.statements.push(currentStatement || '');

                                if (charIndex === chars.length - 1) {
                                    resolve();
                                }
                            }, timeIndex * 50);
                        })(charIndex);
                    }
                });
            });
        },
        printInput(statement: string) {
            this.state.statements.push(statement);
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