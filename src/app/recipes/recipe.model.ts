export class Recipe {
  public title: string;
  public description: string;
  public imagepath: string;

  constructor(title: string, description: string, imagepath: string) {
    this.title = title;
    this.description = description;
    this.imagepath = imagepath;
  }
}
