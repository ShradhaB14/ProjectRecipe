import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  id;
  isEditMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      console.log(this.id);
      this.isEditMode = params["id"] != null;
      console.log(this.isEditMode);
      this.initForm();
    });
  }
  initForm() {
    let title = "";
    let description = "";
    let imagepath = "";
    let recipeIngredient = new FormArray([]);
    if (this.isEditMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      title = recipe.title;
      description = recipe.description;
      imagepath = recipe.imagepath;
      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredient.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, Validators.required)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      imagepath: new FormControl(imagepath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredient
    });
  }
  submit() {
    if (this.isEditMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.navigateTo();
  }
  addIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required)
      })
    );
  }
  navigateTo() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
