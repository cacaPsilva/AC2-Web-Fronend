
import { Injectable } from '@angular/core';
import { Emprestimo } from './models/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  emprestimos: Emprestimo[] = [];

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  adicionar(nomePessoa: string, tituloLivro: string, dataPrevistaDevolucao: string) {
    const emprestimo: Emprestimo = {
      id: Date.now(),
      nomePessoa: nomePessoa,
      tituloLivro: tituloLivro,
      dataPrevistaDevolucao: dataPrevistaDevolucao,
      devolvido: false
    };

    this.emprestimos.push(emprestimo);
  }

  remover(id: number) {
    this.emprestimos = this.emprestimos.filter(
      emprestimo => emprestimo.id !== id
    );
  }

  registrarDevolucao(id: number) {
    const emprestimo = this.emprestimos.find(
      emprestimo => emprestimo.id === id
    );

    if (emprestimo) {
      emprestimo.devolvido = true;
    }
  }

  get total(): number {
    return this.emprestimos.length;
  }

  get emAberto(): number {
    return this.emprestimos.filter(e => !e.devolvido).length;
  }

  get devolvidos(): number {
    return this.emprestimos.filter(e => e.devolvido).length;
  }
}
