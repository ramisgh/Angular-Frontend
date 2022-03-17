import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
id :number;
employee :Employee ;
  constructor(private route : ActivatedRoute ,private employeeServices :EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee =new Employee();
    this.employeeServices.getEmployeeID(this.id).subscribe(data =>{
      this.employee=data;
    })
  }

}
