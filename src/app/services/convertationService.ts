import { Injectable, Input } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Convertation } from "../models/convertation";

@Injectable({
    providedIn: "root"
})

export class ConvertationService{

    
    
    constructor(private http : HttpClient){
        
    }

    getAll(currencyFrom: string,currencyTo: string,value: string): Observable<Convertation>{
        return this.http.get<Convertation>(`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${value}`)
        
    }
}