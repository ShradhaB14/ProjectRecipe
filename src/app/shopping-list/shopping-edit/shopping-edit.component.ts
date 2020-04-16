import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) inputNameRef: ElementRef;
  @ViewChild("amountInput", { static: false }) inputAmountRef: ElementRef;
  @Output() addIngredientToList = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit() {}
  addIngredient() {
    console.log("name", this.inputNameRef.nativeElement.value);
    const name = this.inputNameRef.nativeElement.value;
    const amount = this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.addIngredientToList.emit(ingredient);
  }
}
