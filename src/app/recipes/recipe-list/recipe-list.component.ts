import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Route, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(
    private recipeService: RecipeService,
    private route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
      console.log("sdsdsdsd", this.recipes);
    });
    this.recipes = this.recipeService.getRecipe();
    console.log("this.recipes", this.recipes);
  }
  navigateTo() {
    console.log("sdsd");
    this.route.navigate(["new"], { relativeTo: this.router });
  }
  // code using component communication
  // getRecipe(recipe: Recipe) {
  //   this.selectedRecipe.emit(recipe);
  // }
}
