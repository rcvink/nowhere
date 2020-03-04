import { IState } from '@/models';
import { IInputService, IAudioService, IPrintService } from '@/services';

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

    public handleInput(input: string) {
        if (this.isValidInput(input)) {
            const command = this.getCommand(input);
            this.printService.printInstantly(input);
            this.audioService.playCommand(command);
            this.setScene(command.goTo);
            this.audioService.playScene(this.state.scene);
            this.printService.printAnimated(this.state.scene.text);
            this.printService.printAnimated(this.getValidInputs());
        }
    }

    public getValidInputs() {
        return this.state.scene.commands
            .map((x) => x.input)
            .join(' | ');
    }

    private isValidInput(input: string) {
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

    private getCommand(input: string) {
        return this.state.scene.commands
            .find((command) => command.input === input.toLowerCase()) ||
            this.state.scene.commands[0];
    }
}
