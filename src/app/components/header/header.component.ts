import { Component, Input } from '@angular/core';
import { Crypto } from 'src/app/interfaces/crypto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Input() cryptos: Crypto[] = [];
  filteredCryptos: Crypto[] = [];

  searchTerm = '';
  isInputFocused = false;

  filterCryptos(): void {
    const query = this.searchTerm.trim().toLowerCase();
    if (!query) return;

    this.filteredCryptos = this.cryptos
      .filter((crypto) => crypto.name.toLowerCase().includes(query))
      .slice(0, 5);
  }
}
