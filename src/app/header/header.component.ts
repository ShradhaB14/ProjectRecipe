import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() getComponent = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}
  navigateRecipe(event) {
    console.log("from header", event);
    this.getComponent.emit(event);
  }
}
