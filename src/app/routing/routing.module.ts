import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HomeComponent, ServersComponent, UsersComponent, ServerComponent]
})
export class RoutingModule {}
