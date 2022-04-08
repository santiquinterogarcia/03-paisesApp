import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styles: [],
})
export class PaisTableComponent {
  constructor() {}

  @Input() paises: Country[] = [];
}
