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
    mounted() {
        this.print(this.scene.text);
        this.print(this.validInputs);
    },
    data() {
        return {
            scenes: scenes as IScene[],
            scene: scenes[0] as IScene,
            statements: [] as string[],
        };
    },
    methods: {
        handleInput(statement: string) {
            this.print(statement);
            if (this.isValidInput(statement)) {
                const command = this.getCommand(statement);
                if (command !== undefined) {
                    this.playInput(command);
                    this.setScene(command.goTo);
                    this.print(this.scene.text);
                    this.print(this.validInputs);
                }
            } else {
                this.print(this.scene.text);
                this.print(this.validInputs);
            }
        },
        print(statement: string) {
            this.statements.push(statement);
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
            const newScene = this.scenes.find((x) => x.id === newSceneId);
            if (newScene !== undefined) {
                this.scene = newScene;
            }
        },
    },
    computed: {
        validInputs(): string {
            return this.scene.commands
                .map((x) => x.input)
                .join(' | ');
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