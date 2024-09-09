import { Component, computed, inject, input, signal } from '@angular/core';
import {InvestmentResult } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<InvestmentResult[]>();
  private investmentService = inject(InvestmentService);
  // results = signal<InvestmentResult[] | undefined>(this.investmentService.investmentResults());
  results = computed(() => this.investmentService.investmentResults());


}
