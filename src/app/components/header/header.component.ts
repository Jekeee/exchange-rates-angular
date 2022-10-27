import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../../models/currency-rate';
import { CurrencyRatesService } from '../../services/currencyRates.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private currencyRatesService: CurrencyRatesService) {}

  currencyRates: CurrencyRate | null;
  ngOnInit(): void {
    this.currencyRatesService.getAll().subscribe((currencyRates) => {
      this.currencyRates = currencyRates;
    });
  }
}
