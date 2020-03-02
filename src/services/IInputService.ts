export default interface IInputService {
    handleInput(input: string): void;
    getValidInputs(): string;
}
