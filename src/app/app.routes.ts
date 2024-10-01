import { Routes } from '@angular/router';
import {LoginComponent} from "./forms/template/login/login.component";
import {RegistryComponent} from "./forms/reactive/registry/registry.component";
import {HomeComponent} from "./layout/home/home.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "register",
    component: RegistryComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  }
];
