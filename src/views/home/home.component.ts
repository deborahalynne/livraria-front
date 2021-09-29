import { CadastroComponent } from './../cadastro/cadastro.component';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  List(): void {
        this.router.navigate(["list"]);
    };

  Cadastrar(): void {
      this.router.navigate(["cadastrar"]);
  };
}
