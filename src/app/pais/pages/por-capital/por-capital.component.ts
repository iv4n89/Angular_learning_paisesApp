import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  paises : Country[] = [];
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(this.termino)
      .subscribe(capital => {
        this.paises = capital;
      }, err => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string ) {
    this.hayError = false;
  }

}
