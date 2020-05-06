import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public title: string;
  public description: string;
  public imagepath: string;
  public ingredients: Ingredient[];
  public id?: number;
  constructor(
    title: string,
    description: string,
    imagepath: string,
    ingredients: Ingredient[]
  ) {
    this.title = title;
    this.description = description;
    this.imagepath = imagepath;
    this.ingredients = ingredients;
  }
}
