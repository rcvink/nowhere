import ICommand from '@/models/ICommand';
import Vue from 'vue';

export default interface IInputService {
    handleInput(input: string): void;
    getValidInputs(): string;
}
