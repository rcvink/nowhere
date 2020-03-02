import ICommand from '@/models/ICommand';

export default interface IScene {
    id: number;
    sound?: string;
    text: string;
    commands: ICommand[];
  }
