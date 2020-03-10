import { IState } from '@/models';
import {
    IInputService,
    IAudioService,
    IPrintService,
} from '@/services';
import stringSimilarity from 'string-similarity';

export default class InputService implements IInputService {
    private static readonly similarity = 0.9;
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

    public handleInput = (input: string) => {
        const lowerInput = input.toLowerCase();
        if (this.isValidInput(lowerInput)) {
            const command = this.getCommand(lowerInput);
            this.printService.printUserInput(input);
            this.audioService.playCommand(command);
            this.setScene(command.goTo);
            this.audioService.playScene(this.state.scene);
            this.printService.printScene(this.state.scene);
        }
    }

    private isValidInput = (userInput: string) =>
        this.state.scene.commands
            .some((x) =>
                stringSimilarity.compareTwoStrings(userInput, x.input) > InputService.similarity)

    private setScene = (newSceneId: number) => {
        const newScene = this.state.scenes.find((x) => x.id === newSceneId);
        if (newScene !== undefined) {
            this.state.scene = newScene;
        }
    }

    private getCommand = (userInput: string) =>
        this.state.scene.commands
            .find((command) =>
                this.areStringsSimilar(userInput, command.input)) ||
                this.state.scene.commands[0]

    private areStringsSimilar = (userInput: string, correctInput: string) =>
        stringSimilarity.compareTwoStrings(userInput, correctInput) > InputService.similarity
}
