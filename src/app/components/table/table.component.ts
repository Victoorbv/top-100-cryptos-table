import { Component, Input } from '@angular/core';
import { Crypto } from 'src/app/interfaces/crypto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent {
  @Input() cryptos: Crypto[] = [];
  @Input() errorMessage = '';
}
