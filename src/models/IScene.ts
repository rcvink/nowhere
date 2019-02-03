import ICommand from '@/models/ICommand';

export default interface IScene {
    id: number;
    text: string;
    commands: ICommand[];
  }
