import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppinglistService } from "../shoppinglist.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) inputNameRef: ElementRef;
  @ViewChild("amountInput", { static: false }) inputAmountRef: ElementRef;
  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {}
  addIngredient() {
    const name = this.inputNameRef.nativeElement.value;
    const amount = this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.onIngredientAdded(ingredient);
  }
}
