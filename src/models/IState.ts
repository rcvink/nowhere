import IScene from '@/models/IScene';

export default interface IState {
    scene: IScene;
    scenes: IScene[];
    statements: string[];
    printChain: Promise<{}>;
}
