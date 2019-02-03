import ISceneFactory from '@/factories/ISceneFactory';
import IScene from '@/models/IScene';
import Scene from '@/models/Scene';
import scenesJson from '@/static/scenes.json';

export default class SceneFactory implements ISceneFactory {
  public create(): IScene[] {
    const scenes: IScene[] = [];

    for (const sceneJson of scenesJson) {
      const scene = new Scene(
        sceneJson.id,
        sceneJson.commands,
        sceneJson.text);
      scenes.push(scene);
    }

    return scenes;
  }
}
