import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./routing/home/home.component";
import { UsersComponent } from "./routing/users/users.component";
import { ServersComponent } from "./routing/servers/servers.component";
import { UserComponent } from "./routing/users/user/user.component";
import { EditServerComponent } from "./routing/servers/edit-server/edit-server.component";
import { ServerComponent } from "./routing/servers/server/server.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
// const routes: Routes = [
//   { path: "", component: HomeComponent },
//   {
//     path: "user",
//     component: UsersComponent,
//     children: [{ path: ":id/:name", component: UserComponent }]
//   },
//   {
//     path: "server",
//     component: ServersComponent,
//     children: [
//       { path: ":id", component: ServerComponent },
//       { path: ":id/edit", component: EditServerComponent }
//     ]
//   }
// ];
const route: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopping", component: ShoppingListComponent },
  { path: "**", redirectTo: "/recipes" }
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
