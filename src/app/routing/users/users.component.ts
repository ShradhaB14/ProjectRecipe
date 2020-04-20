import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: "Shradha" },
    { id: 2, name: "Malvika" },
    { id: 3, name: "Umesha" },
    { id: 4, name: "Pooja" }
  ];
  constructor() {}

  ngOnInit() {}
}
