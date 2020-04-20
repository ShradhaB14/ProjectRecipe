import { Component, OnInit } from "@angular/core";
import { ServerService } from "./server.service";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.scss"]
})
export class ServersComponent implements OnInit {
  servers = [];
  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }
}
