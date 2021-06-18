import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto';
  allData: any = {};
  addFav: any = [];


  constructor(private dataservice: DataService,) { }

  ngOnInit() {
    this.getLatestData();
  }

  addFavo(data: any) {
    this.addFav.push(data);
    console.log(this.addFav)
  }

  getLatestData() {
    this.dataservice.getAllUser().subscribe((response) => {
      this.allData = response
      console.log(this.allData)
    })
  }
}




















