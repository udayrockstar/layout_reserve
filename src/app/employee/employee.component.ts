import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private dataService: GetDataService) { }
  public employees = [];
  ngOnInit() {
    this.dataService.getData()
    .subscribe(data => this.employees = data);
  }

}
