import IScene from '@/models/IScene';

export default interface IState {
    scene: IScene;
    scenes: IScene[];
    statements: string[];
    printChain: Promise<{}>;
    loop: HTMLMediaElement | null;
    audioChain: Promise<{}>;
}
