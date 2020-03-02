import { ICommand, IScene } from '@/models';

export default interface IAudioService {
    play(command: ICommand): void;
    playScene(scene: IScene): void;
}
