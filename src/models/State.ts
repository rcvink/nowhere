import IScene from '@/models/IScene';
import IState from '@/models/IState';

export default class State implements IState {
    public scene: IScene;
    public scenes: IScene[];
    public statements: string[];
    public printChain: Promise<{}>;

    constructor(scenes: IScene[]) {
        this.scenes = scenes;
        this.scene = this.scenes[0];
        this.statements = [];
        this.printChain = Promise.resolve({});
    }
}
