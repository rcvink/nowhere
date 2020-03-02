import { IAudioService } from '@/services';
import { ICommand, IScene, IState } from '@/models';

export default class AudioService implements IAudioService {
    private state: IState;

    constructor(state: IState) {
        this.state = state;
    }

    public playScene(scene: IScene) {
        try {
            if (scene.sound &&
                scene.sound.includes('STOPLOOP') &&
                this.state.loop) {
                this.state.loop.pause();
                this.state.loop = null;
            } else if (scene.sound) {
                const path = require('./../assets/' + scene.sound);
                const audio = new Audio(path);
                this.handleLoop(scene.sound, audio);
                audio.play();
            }
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
            this.state.loop = audio;
        }
    }
}
