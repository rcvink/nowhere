import AudioService from './AudioService';
import InputService from './InputService';
import PrintService from './PrintService';
import IAudioService from './IAudioService';
import IPrintService from './IPrintService';
import IInputService from './IInputService';
import Models from '../models';

const audioService = new AudioService();
const printService = new PrintService(Models.state);
const inputService = new InputService(
    Models.state,
    printService,
    audioService);

export default {
    audioService,
    printService,
    inputService,
};
