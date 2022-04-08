import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    /* this.activateRoute.params.subscribe((params) => {
      this.paisService
        .verPaisPorCodigo(params['id'])
        .subscribe((pais) => console.log(pais));
    }); */

    this.activateRoute.params
      .pipe(
        switchMap((param) => this.paisService.verPaisPorCodigo(param['id'])),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
  }
}
