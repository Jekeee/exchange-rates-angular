import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ConvertationService } from 'src/app/services/convertationService';
import { CurrencyRate } from '../../models/currency-rate'


@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.css']
})

  

export class ConvertationComponent {
    selectOptions = ['USD','EUR','UAH','CAD']
    firstInputValue = ''
    secondInputValue = ''
    firstSelectedValue = 'USD'
    secondSelectedValue = 'EUR'
    timeout: any

  constructor(
    private convertationService : ConvertationService
    ){}
  
    currencyRates: CurrencyRate | null

  handleFirstInputChange(currencyFrom: string,currencyTo: string,$event: any){
    
    clearTimeout(this.timeout);
      this.firstInputValue = $event
      this.timeout = setTimeout(
      () => {
        currencyFrom = this.firstSelectedValue
        currencyTo = this.secondSelectedValue
        const value = $event
        this.convertationService.getAll(currencyFrom,currencyTo,value).subscribe(
          (result: { result: number; })=>{
            this.secondInputValue = result.result?.toFixed(2)      
      }
    )},500);
  }

  handleSecondInputChange(currencyFrom: string,currencyTo: string,$event: any){
    clearTimeout(this.timeout);
    this.secondInputValue = $event
    this.timeout = setTimeout(
      () => {
    currencyFrom = this.firstSelectedValue
    currencyTo = this.secondSelectedValue
    const value = $event
    this.convertationService.getAll(currencyFrom,currencyTo,value).subscribe(
      (result: { result: number; })=>{
        this.firstInputValue = result.result?.toFixed(2)      
      }
    )},500);
  }

  handleFirstSelectChange($event: string,currencyTo: string, value:string){
    this.firstSelectedValue = $event
    currencyTo = this.secondSelectedValue
    const currencyFrom = $event
    value = this.firstInputValue
    this.convertationService.getAll(currencyFrom,currencyTo,value).subscribe(
      (result: { result: number; })=>{
        this.secondInputValue = result.result.toFixed(2)      
      }
    ) 
  }

  handleSecondSelectChange(currencyFrom: string,$event: string, value:string){
    this.secondSelectedValue = $event
    const currencyTo = $event
    currencyFrom = this.firstSelectedValue
    value = this.firstInputValue
    this.convertationService.getAll(currencyFrom,currencyTo,value).subscribe(
      (result: { result: number; })=>{
        this.secondInputValue = result.result.toFixed(2)      
      }
    ) 
  }
}
