import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() listofrecipe: Recipe;
  @Output() getRecipe = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
    console.log("listofrecipe", this.listofrecipe);
  }
  sendData() {
    this.getRecipe.emit();
  }
}
