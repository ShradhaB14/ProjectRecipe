import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppinglistService {
  ingredientChanged = new Subject<Ingredient[]>();
  igIndex = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Orange", 10),
    new Ingredient("Cherry", 15)
  ];
  constructor() {}
  onIngredientAdded(ingredientObj) {
    this.ingredients.push(ingredientObj);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient[]) {
    console.log(ingredient);
    this.ingredients.push(...ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
