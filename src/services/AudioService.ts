import { IAudioService } from '@/services';
import { ICommand, IScene } from '@/models';

export default class AudioService implements IAudioService {
    public playScene(scene: IScene) {
        try {
            const path = require('./../assets/' + scene.sound);
            const audio = new Audio(path);
            if (scene.sound !== null && scene.sound !== undefined) {
                this.handleLoop(scene.sound, audio);
            }
            audio.play();
        } catch (error) {
            return;
        }
    }

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
