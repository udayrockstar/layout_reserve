import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService:GetDataService) {}
  title = 'app';
  public users = [];

  ngOnInit() {
     this.dataService.getData()
     .subscribe(data => this.users = data);
    console.log('This is json data',this.users);
    
  }
}
