import AudioService from './AudioService';
import InputService from './InputService';
import PrintService from './PrintService';
import Models from '../models';

const audioService = new AudioService(
    Models.state);
const printService = new PrintService(
    Models.state);
const inputService = new InputService(
    Models.state,
    printService,
    audioService);

export default {
    audioService,
    printService,
    inputService,
};

export { default as IAudioService } from './IAudioService';
export { default as IPrintService } from './IPrintService';
export { default as IInputService } from './IInputService';
