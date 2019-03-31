import ICommand from '@/models/ICommand';
import IInputService from '@/services/IInputService';
import IAudioService from '@/services/IAudioService';
import IPrintService from '@/services/IPrintService';
import IState from '@/models/IState';
import Vue from 'vue';

export default class InputService implements IInputService {
    private state: IState;
    private printService: IPrintService;
    private audioService: IAudioService;

    constructor(
        state: IState,
        printService: IPrintService,
        audioService: IAudioService) {
        this.state = state;
        this.printService = printService;
        this.audioService = audioService;
    }

    public handleInput(input: string): void {
        if (this.isValidInput(input)) {
            const command = this.getCommand(input);
            this.setScene(command.goTo);
            this.printService.printInstantly(input);
            this.audioService.play(command);
            this.printService.printAnimated(this.state.scene.text);
            this.printService.printAnimated(this.getValidInputs());
        }
    }

    public getValidInputs(): string {
        return this.state.scene.commands
            .map((x) => x.input)
            .join(' | ');
    }

    private isValidInput(input: string): boolean {
        return this.state.scene.commands
            .map((x) => x.input)
            .includes(input.toLowerCase());
    }

    private setScene(newSceneId: number) {
        const newScene = this.state.scenes.find((x) => x.id === newSceneId);
        if (newScene !== undefined) {
            this.state.scene = newScene;
        }
    }

    private getCommand(input: string): ICommand {
        return this.state.scene.commands
            .find((command) => command.input === input.toLowerCase()) ||
            this.state.scene.commands[0];
    }
}
