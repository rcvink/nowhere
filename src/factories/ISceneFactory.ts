import IScene from '@/models/IScene';

export default interface ISceneFactory {
  create(): IScene[];
}
