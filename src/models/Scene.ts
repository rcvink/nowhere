import IScene from '@/models/IScene';
import ICommand from '@/models/ICommand';

export default class Scene implements IScene {
    public id: number;
    public commands: ICommand[];
    public text: string;

    constructor(id: number, commands: ICommand[], text: string) {
        this.id = id;
        this.commands = commands;
        this.text = text;
    }
}
