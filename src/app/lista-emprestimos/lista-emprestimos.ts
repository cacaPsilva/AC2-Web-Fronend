
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-lista-emprestimos',
  imports: [RouterLink],
  templateUrl: './lista-emprestimos.html',
  styleUrl: './lista-emprestimos.css'
})
export class ListaEmprestimos {

  constructor(public emprestimoService: EmprestimoService) {}

  remover(id: number) {
    this.emprestimoService.remover(id);
  }

  registrarDevolucao(id: number) {
    this.emprestimoService.registrarDevolucao(id);
  }
}

