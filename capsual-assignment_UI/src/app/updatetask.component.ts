
import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './services/http.service';
import {FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { Task } from './task';


@Component({
   templateUrl: './updatetask.component.html'
 
})
export class UpdateTaskComponent  {

   id1;
   task : Task; 
   response;
   successMessage;
   errorMessage; 
    

   updateForm=new FormGroup( {
    id: new FormControl('',Validators.required ),
    task: new FormControl( '' ,Validators.required),
    parentTask: new FormControl( '',Validators.required ),
    priority: new FormControl( '' ,Validators.required),
    startDate: new FormControl( '',Validators.required ),
    endDate: new FormControl( '',Validators.required ),
    parent:new FormControl( '',Validators.required )
  } );

  constructor(public router: Router,public activatedRoute: ActivatedRoute,private httpService:HttpService) { }
  
  
  ngOnInit() {
   this.id1 = this.activatedRoute.snapshot.params['id'];
   this.httpService.searchTaskById(this.id1).then((res:any) => {
     
      this.task=res; 

      this.updateForm.patchValue({
        id: res.id,
        task: res.task,
        parentTask:res.parent.parentTask,
        priority:res.priority,
        startDate:res.startDate,
        endDate:res.endDate,
        parent:res.parent     // other form fields
      })
      
    });

 }
 onSubmit() {
  
  this.task=this.updateForm.value;
  this.task.parent.parentTask=this.updateForm.value.parentTask;
  
 this.httpService.updateTask(this.task).then((res:any) => {
  this.response=res;
 
  this.successMessage=res.successMessage;
  if(res.error){
  this.errorMessage=res.error.description;
  }
 })

 }

 cancelTask(){
   this.router.navigate(['/task']);
 }
 
 valueChanged(e) {
   this.updateForm.value.priority = e.target.value;
 }
 
 
  
}
