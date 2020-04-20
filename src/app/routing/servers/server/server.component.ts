import { Component, OnInit } from "@angular/core";
import { ServerService } from "../server.service";
import { Server } from "../server.model";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
  server: Server;
  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.getServer();
  }
  getServer() {
    this.server = this.serverService.getServer(1);
  }
}
