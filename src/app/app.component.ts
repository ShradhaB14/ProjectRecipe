import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "recipe";
  navigate;
  getComponent(componentNavigate) {
    console.log("component", componentNavigate);
    this.navigate = componentNavigate;
  }
}
