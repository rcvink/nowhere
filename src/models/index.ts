import State from './State';
import scenes from '@/static/scenes.json';

const state = new State(scenes);

export default {
    state,
};
export { default as ICommand } from './ICommand';
export { default as IScene } from './IScene';
export { default as IState } from './IState';
