import { Component } from '@angular/core';
import { Crypto } from 'src/app/interfaces/crypto';
import { CryptosService } from 'src/app/services/cryptos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ejercicio-front';
  cryptos: Crypto[] = [];
  errorMessage = '';

  constructor(private readonly cryptoService: CryptosService) {}

  ngOnInit() {
    this.loadCryptos();
  }

  loadCryptos() {
    this.errorMessage = '';

    this.cryptoService.getAllCryptos().subscribe({
      next: (cryptos) => {
        this.cryptos = cryptos;
      },
      error: (error: Error) => {
        this.cryptos = [];
        this.errorMessage = error.message;
      },
    });
  }
}
