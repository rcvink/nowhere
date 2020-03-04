import { IState, IScene } from '@/models';
import { IPrintService } from '@/services';

export default class PrintService implements IPrintService {
    private state: IState;

    constructor(state: IState) {
        this.state = state;
    }

    public printScene = (scene: IScene) => {
        this.printAnimated(scene.text);
        this.printAnimated(this.getValidInputs(scene));
    }

    public printUserInput = (input: string) => {
        this.state.statements.push(input);
        this.scrollDown();
    }

    private printAnimated = (statement: string) =>
        this.state.printChain = this.state.printChain.then(() => {
            return new Promise((resolve) => {
                this.state.statements.push(statement[0]);
                this.printCharByChar(
                    statement.split(''),
                    resolve);
            });
        })

    private printCharByChar = (
        chars: string[],
        resolve: () => void) => {
        for (let charIndex = 1; charIndex < chars.length; charIndex++) {
            const char = chars[charIndex];
            ((timeIndex) => {
                setTimeout(() => {
                    let currentStatement = this.state.statements.pop();
                    currentStatement += char;
                    this.state.statements.push(currentStatement || '');
                    if (charIndex === chars.length - 1) {
                        this.scrollDown();
                        resolve();
                    }
                }, timeIndex * 40);
            })(charIndex);
        }
    }

    private getValidInputs = (scene: IScene) =>
        scene.commands
            .map((x) => x.input)
            .join(' | ')

    private scrollDown = () =>
        window.scrollTo(0, document.body.scrollHeight)
}
