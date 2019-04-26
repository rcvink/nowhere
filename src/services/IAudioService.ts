import { ICommand } from '@/models';

export default interface IAudioService {
    play(command: ICommand): void;
}
