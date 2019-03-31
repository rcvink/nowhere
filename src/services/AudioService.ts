import IAudioService from '@/services/IAudioService';
import ICommand from '@/models/ICommand';

export default class AudioService implements IAudioService {
    public play(command: ICommand): void {
        try {
            const path = require('./../assets/' + command.sounds[0]);
            const audio = new Audio(path);
            audio.play();
        } catch (error) {
            return;
        }
    }

}
