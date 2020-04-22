import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  private servers = [
    {
      id: 1,
      name: "Productionserver",
      status: "online"
    },
    {
      id: 2,
      name: "Testserver",
      status: "offline"
    },
    {
      id: 3,
      name: "Devserver",
      status: "offline"
    }
  ];
  constructor() {}
  getServers() {
    return this.servers.slice();
  }
  getServer(id) {
    const server = this.servers.find(item => item.id === id);
    return server;
  }
  updateServer(id, serverInfo: { name: string; status: string }) {
    const server = this.servers.find(item => item.id === id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
