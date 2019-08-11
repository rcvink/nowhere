import { IAudioService } from '@/services';
import { ICommand } from '@/models';

export default class AudioService implements IAudioService {
    public play(command: ICommand) {
        try {
            command.sounds.forEach((soundName) => {
                const path = require('./../assets/' + soundName);
                const audio = new Audio(path);
                this.handleLoop(soundName, audio);
                audio.play();
            });
        } catch (error) {
            return;
        }
    }

    private handleLoop(soundName: string, audio: HTMLAudioElement) {
        if (soundName.includes('LOOP')) {
            audio.loop = true;
        }
    }
}
