import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppinglistService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Orange", 10),
    new Ingredient("Cherry", 15)
  ];
  constructor() {}
  onIngredientAdded(ingredientObj) {
    this.ingredients.push(ingredientObj);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient[]) {
    console.log(ingredient);
    this.ingredients.push(...ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
