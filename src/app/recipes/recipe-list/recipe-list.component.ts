import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Testing",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "Demo",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    )
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {
    console.log("FFFF", this.recipes);
  }
  getRecipe(recipe: Recipe) {
    // console.log("sdsdsd", recipe);
    // this.selectedRecipe = recipe;
    this.selectedRecipe.emit(recipe);
  }
}
