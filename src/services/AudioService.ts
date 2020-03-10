import { IAudioService } from '@/services';
import { ICommand, IScene, IState } from '@/models';

export default class AudioService implements IAudioService {
    private state: IState;

    constructor(state: IState) {
        this.state = state;
    }

    public playScene = (scene: IScene) => {
        if (scene.sound &&
            scene.sound.includes('STOPLOOP') &&
            this.state.loop) {
            this.state.loop.pause();
        } else if (scene.sound) {
            this.play(scene.sound);
        }
    }

    public playCommand = (command: ICommand) => {
        command.sounds.forEach((soundName) => {
            this.playSequentially(soundName);
        });
    }

    private playSequentially = (soundName: string) => {
        this.state.audioChain = this.state.audioChain.then(() =>
            new Promise((resolve) => {
                const audio = this.play(soundName);
                audio.onended = () => resolve();
            }),
        );
    }

    private play = (soundName: string) => {
        const path = require('./../assets/' + soundName);
        const audio = new Audio(path);
        this.handleLoop(soundName, audio);
        audio.play();
        return audio;
    }

    private handleLoop = (
        soundName: string,
        audio: HTMLAudioElement) => {
        if (soundName.includes('LOOP')) {
            if (this.state.loop) {
                this.state.loop.pause();
            }
            audio.loop = true;
            this.state.loop = audio;
        }
    }
}
