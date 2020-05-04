import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppinglistService } from "../shoppinglist.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("f", { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIng: Ingredient;
  indextest: number;
  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.igIndex.subscribe(
      (index: number) => {
        this.editMode = true;
        this.indextest = index;
        this.editedIng = this.shoppingListService.getIngredient(this.indextest);
        this.slForm.setValue({
          name: this.editedIng.name,
          amount: this.editedIng.amount
        });
      }
    );
  }
  onSubmit(f: NgForm) {
    console.log(f.value.name, f.value.amount);
    const value = f.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.indextest, ingredient);
    } else {
      this.shoppingListService.onIngredientAdded(ingredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.indextest);
    this.onClear();
  }
}
