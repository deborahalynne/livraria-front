import { BookService } from './../../app/services/book.service';
import { Book } from './../../app/models/Book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

constructor(private Book: BookService, private router: Router) {}

ngOnInit(): void {}

cadastrar(): void {

  let booke: Book = {
    livro: this.livro
  }


  this.Book.create(BookService).subscribe((BookService) => {
    this.router.navigate([""]);
  });
}
}

