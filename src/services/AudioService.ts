import { IAudioService } from '@/services';
import { ICommand } from '@/models';

export default class AudioService implements IAudioService {
    public play(command: ICommand) {
        try {
            const path = require('./../assets/' + command.sounds[0]);
            const audio = new Audio(path);
            audio.loop = true;
            audio.play();
        } catch (error) {
            return;
        }
    }

}
