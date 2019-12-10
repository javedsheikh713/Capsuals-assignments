
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from './services/http.service';


@Component({
   templateUrl: './addtask.component.html'
 
})
export class AddTaskComponent {
  constructor(public router: Router,private httpService:HttpService) { }
  errorResponse=false;
  errorDescription='';
  taskName='Add Task';
  rangevalue = 0;
  successMessage;
  errorMessage;
  ngOnInit() {
   this.taskName='Add Task'; 
 }
 onClickSubmit(data) {
 this.successMessage=null;
 this.errorMessage=null;
    this.httpService.addTask(data).then((res:any) => {
    
      //alert(res);
      this.successMessage=res.successMessage;
      this.errorMessage='';
      if(res.error){
      this.errorMessage=res.error.description;
      }
     })

 }

 

  valueChanged(e) {
    this.rangevalue = e.target.value;
  }
 

 
 
  
}
