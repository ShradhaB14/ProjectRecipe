import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { RoutingModule } from "./routing/routing.module";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./routing/home/home.component";
import { UsersComponent } from "./routing/users/users.component";
import { ServersComponent } from "./routing/servers/servers.component";
import { UserComponent } from "./routing/users/user/user.component";
import { EditServerComponent } from "./routing/servers/edit-server/edit-server.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user", component: UsersComponent },
  { path: "server", component: ServersComponent },
  { path: "user/:id/:name", component: UsersComponent },
  { path: "server/:id/edit", component: EditServerComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
