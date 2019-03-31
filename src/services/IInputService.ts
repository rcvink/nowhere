import ICommand from '@/models/ICommand';
import Vue from 'vue';

export default interface IInputService {
    handleInput(input: string, command: ICommand): void;
    getValidInputs(): string;
    handleSubmit(input: string, context: Vue): void;
}
