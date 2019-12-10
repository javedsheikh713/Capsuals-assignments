
import { Component, Output } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from './services/http.service';
import { Task } from './task';



@Component({
   templateUrl: './viewtask.component.html'
 
})
export class ViewTaskComponent {

   errorResponse=false;
    tasks;
    public searchTask : string;
    public searchParentTask : string;
    filteredList ;
     successMessage;
    errorMessage;
    //public priorityFrom : string;
   // public priorityTo : string;



  constructor(public router: Router,private httpService:HttpService) { }
  

  ngOnInit() {
   this.getAllTask();
 }
 

getAllTask(){

   this.httpService.getTasks().then((res:any) => {
        this.tasks=res.taskList;
        this.filteredList=res.taskList;
      
 
  this.successMessage=res.successMessage;
  if(res.error){
  this.errorMessage=res.error.description;
  }
    }); 
}

  editTask(data:any){
    
    var url ="updatetask/"+data;
    this.router.navigateByUrl(url);
  }

  searchByTask(searchText : any){
    if(!searchText){
      this.filteredList=this.tasks;
    }else{
     this.filteredList = this.tasks.filter((task: Task) => task.task === searchText);
    }
  }
  searchByParentTask(searchText : any){
    if(!searchText){
      this.filteredList=this.tasks;
    }else{
    this.filteredList = this.tasks.filter((task: Task) => task.parentTask === searchText);
    }
 }
 

searchByStartDate(searchText : any){
  if(!searchText){
    this.filteredList=this.tasks;
  }else{
  this.filteredList = this.tasks.filter((task: Task) => task.startDate === searchText);
  }
}

searchByEndDate(searchText : any){
  if(!searchText){
    this.filteredList=this.tasks;
  }else{
  this.filteredList = this.tasks.filter((task: Task) => task.endDate === searchText);
  }
}

searchByPriorityRange(fromPriority : any,toPriority : any){
  if(!fromPriority || ! toPriority){
    this.filteredList=this.tasks;
  }else{
  this.filteredList = this.tasks.filter((task: Task) => task.priority >= fromPriority && task.priority <= toPriority);
  }
}

endTask(id:any){
  
  this.httpService.endTask(id).then((res:any) => {
    this.getAllTask();
   
}); 
}

  
}
