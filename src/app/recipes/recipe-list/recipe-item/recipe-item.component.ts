import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() listofrecipe: Recipe;
  @Input() index: number;
  // @Output() getRecipe = new EventEmitter<void>();
  //constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
  //sendData() {
  // this.getRecipe.emit();
  //this.recipeService.recipeSelected.emit(this.listofrecipe);
  //}
}
