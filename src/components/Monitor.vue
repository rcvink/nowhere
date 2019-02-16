<template>
    <div class="monitor-container container monitor">
        <History class="history-child" :initialStatements="statements"/>
        <Input 
            class="input-child container input-container" 
            @input="handleInput"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import History from '@/components/History.vue';
import Input from '@/components/Input.vue';
import IScene from '@/models/IScene';
import ICommand from '@/models/ICommand';
import scenes from '@/static/scenes.json';

export default Vue.extend({
    name: 'Monitor',
    components: {
        History,
        Input,
    },
    created() {
        this.addStatementToHistory(this.currentScene.text);
        this.addStatementToHistory(this.parsedCommandTexts);
    },
    data() {
        return {
            scenes: scenes as IScene[],
            currentId: 0,
            statements: [] as string[],
        };
    },
    methods: {
        handleInput(statement: string) {
            this.addStatementToHistory(statement);
            if (this.isInputValid(statement)) {
                const inputCommand = this.getCommand(statement);
                if (inputCommand !== undefined) {
                    this.playInput(inputCommand);
                    this.incrementId(inputCommand.goTo);
                    this.addStatementToHistory(this.currentScene.text);
                    this.addStatementToHistory(this.parsedCommandTexts);
                }
            } else {
                this.addStatementToHistory(this.currentScene.text);
                this.addStatementToHistory(this.parsedCommandTexts);
            }
        },
        addStatementToHistory(statement: string) {
            this.statements.push(statement);
        },
        isInputValid(statement: string) {
            return this.commandTexts.includes(statement.toLowerCase());
        },
        incrementId(newId: number) {
            this.currentId = newId;
        },
        getCommand(statement: string) {
            return this.currentScene.commands.find((command) => command.input === statement.toLowerCase());
        },
        playInput(command: ICommand) {
            const audio = new Audio(require('./../assets/' + command.sounds[0]));
            audio.play();
        },
    },
    computed: {
        currentScene(): IScene {
            return this.scenes.find((scene) => scene.id === this.currentId) || this.scenes[0];
        },
        commandTexts(): string[] {
            return this.currentScene.commands.map((x) => x.input);
        },
        parsedCommandTexts(): string {
            return this.commandTexts.join(' | ');
        },
    },
});

</script>

<style scoped lang="scss">
.monitor {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 95vh;
    max-height: 95vh;
    cursor: crosshair;
}

.monitor-container {
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