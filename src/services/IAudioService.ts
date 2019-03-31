import ICommand from '@/models/ICommand';

export default interface IAudioService {
    play(command: ICommand): void;
}
