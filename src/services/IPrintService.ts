import { IScene } from '@/models';

export default interface IPrintService {
    printUserInput(input: string): void;
    printScene(scene: IScene): void;
}
