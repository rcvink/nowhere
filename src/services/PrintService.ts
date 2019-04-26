import { IState } from '@/models';
import { IPrintService } from '@/services';

export default class PrintService implements IPrintService {
    private state: IState;

    constructor(state: IState) {
        this.state = state;
    }

    public printAnimated(statement: string) {
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
                                this.scrollDown();
                                resolve();
                            }
                        }, timeIndex * 40);
                    })(charIndex);
                }
            });
        });

    }

    public printInstantly(statement: string) {
        this.state.statements.push(statement);
        this.scrollDown();
    }

    private scrollDown() {
        window.scrollTo(0, document.body.scrollHeight);
    }
}
