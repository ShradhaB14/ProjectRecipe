import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }
  onAddToShoppingList() {
    console.log(this.recipe.ingredients);
    this.recipeService.onAddToShoppingList(this.recipe.ingredients);
  }
  navigateTo() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    // this.router.navigate(["../", this.id, "edit"], { relativeTo: this.route });
  }
  onDelete() {
    this.recipeService.onDeleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
