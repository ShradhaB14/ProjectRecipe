import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "../shopping-list/shoppinglist.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Testing",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
      [new Ingredient("Meat", 1), new Ingredient("Fries", 20)]
    ),
    new Recipe(
      "Demo",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
      [new Ingredient("Buns", 10), new Ingredient("Meat", 10)]
    ),
    new Recipe(
      "fdfgdfgdfg",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Buns", 10), new Ingredient("Meat", 10)]
    )
  ];

  constructor(private slService: ShoppinglistService) {}
  getRecipe() {
    return this.recipes.slice();
  }
  getRecipeById(index) {
    return this.recipes[index];
  }
  onAddToShoppingList(ingredient: Ingredient[]) {
    console.log(ingredient);
    this.slService.addIngredient(ingredient);
  }
}
