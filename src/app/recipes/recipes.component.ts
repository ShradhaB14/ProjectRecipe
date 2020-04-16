import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipe;
  constructor() {}

  ngOnInit() {}
  getSelectedRecipe(recipe) {
    this.recipe = recipe;
    console.log("from recipes", this.recipe);
  }
}
