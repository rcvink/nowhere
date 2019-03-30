import IScene from '@/models/IScene';
import IState from '@/models/IState';
import scenes from '@/static/scenes.json';

export default class State implements IState {
    public scene: IScene = scenes[0];
    public scenes: IScene[] = scenes;
    public statements: string[] = [];
}
