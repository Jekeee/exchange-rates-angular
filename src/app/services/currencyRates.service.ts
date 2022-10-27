import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { CurrencyRate } from "../models/currency-rate";

@Injectable({
    providedIn: "root"
})

export class CurrencyRatesService{

    
    constructor(private http : HttpClient){

    }


    getCurrencyRate(): Observable<CurrencyRate>{
        return this.http.get<CurrencyRate>('https://api.exchangerate.host/latest?symbols=EUR,USD,CAD&base=UAH')
        
    }
}