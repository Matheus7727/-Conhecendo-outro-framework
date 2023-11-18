import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Livro[] = [
    // Inserir pelo menos três livros aqui
  ];

  constructor() {}

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    // Implementar a lógica de inclusão do livro
  }

  excluir(codigo: number): void {
    // Implementar a lógica de exclusão do livro
  }
}
