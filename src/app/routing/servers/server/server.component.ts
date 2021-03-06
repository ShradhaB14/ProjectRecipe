import { Component, OnInit } from "@angular/core";
import { ServerService } from "../server.service";
import { Server } from "../server.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //this.getServer();
    const id = +this.route.snapshot.params["id"];
    this.server = this.serverService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(+params["id"]);
    });
  }
  getServer() {
    this.server = this.serverService.getServer(1);
  }
  navigateTo() {
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve"
    });
  }
}
