import { ICommand, IScene } from '@/models';

export default interface IAudioService {
    playCommand(command: ICommand): void;
    playScene(scene: IScene): void;
}
