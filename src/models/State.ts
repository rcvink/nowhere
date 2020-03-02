import IScene from '@/models/IScene';
import IState from '@/models/IState';

export default class State implements IState {
    public scenes: IScene[] = [];
    public scene!: IScene;
    public statements: string[] = [];
    public printChain: Promise<{}> = Promise.resolve({});
    public loop!: HTMLAudioElement;
}
