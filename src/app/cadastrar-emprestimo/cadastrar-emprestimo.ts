
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../emprestimo-service';

@Component({
  selector: 'app-cadastrar-emprestimo',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimo {

  nomePessoa: string = '';
  tituloLivro: string = '';
  dataPrevistaDevolucao: string = '';

  constructor(public emprestimoService: EmprestimoService) {}

  cadastrar() {
    if (
      this.nomePessoa.trim() !== '' &&
      this.tituloLivro.trim() !== '' &&
      this.dataPrevistaDevolucao !== ''
    ) {
      this.emprestimoService.adicionar(
        this.nomePessoa,
        this.tituloLivro,
        this.dataPrevistaDevolucao
      );

      this.nomePessoa = '';
      this.tituloLivro = '';
      this.dataPrevistaDevolucao = '';
    }
  }
}
