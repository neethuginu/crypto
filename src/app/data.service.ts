import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api =
    {
      "key": "f14f55f2-0224-48e1-bd92-fadc009d3bd1"
    }

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/historical?CMC_PRO_API_KEY=" + this.api.key)

  }
}





