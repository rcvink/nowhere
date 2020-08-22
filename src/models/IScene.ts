import ICommand from '@/models/ICommand';

export default interface IScene {
    id: number;
    sounds?: string[];
    text: string;
    commands: ICommand[];
  }
