import ICommand from '@/models/ICommand';

export default interface IInputService {
    handleInput(input: string, command: ICommand): void;
    getValidInputs(): string;
}
