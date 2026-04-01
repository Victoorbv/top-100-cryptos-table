import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Crypto } from '../interfaces/crypto';

@Injectable({
  providedIn: 'root',
})
export class CryptosService {
  private readonly apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  constructor(private readonly http: HttpClient) {}

  getAllCryptos(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(this.apiUrl).pipe(
      map((cryptos) =>
        cryptos.map((crypto) => ({
          ...crypto,
          price_change_percentage_24h: Number(
            Number(crypto.price_change_percentage_24h ?? 0).toFixed(2),
          ),
        })),
      ),
      catchError((error: HttpErrorResponse) => {
        return throwError(
          () =>
            new Error(
              'No se pudieron cargar las criptomonedas. Rate limit excedido.',
            ),
        );
      }),
    );
  }
}
