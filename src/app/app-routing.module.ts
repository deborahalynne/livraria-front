import { HomeComponent } from './../views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/views/list/list.component';
import { CadastroComponent } from 'src/views/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "cadastrar",
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
