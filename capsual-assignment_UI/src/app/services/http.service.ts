import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Task } from '../task';




const baseUrl: string = 'http://localhost:8080/'
const header = {
    'Content-Type': 'application/json'
   
    };
    const httpOptions = new HttpHeaders(header);


@Injectable()
export class HttpService {
    
     public task: Task;

  

  
    
    constructor(public http: HttpClient) { }
      


    addTask(task: any){
        
        return this.http.post(baseUrl+'addtask', task,{headers : httpOptions}).toPromise();
    }

    authenticateUser(userRequest: any){
       
         
        return this.http.post(baseUrl+'login', userRequest,{headers : httpOptions}).toPromise();
         
    }

   
updateTask(task: any){
        return this.http.post(baseUrl+'updatetask', task).toPromise();
    }

    getTasks(){
        return this.http.get(baseUrl+'getalltask').toPromise();
    }

    searchTaskById(id:number){
        var url='searchbyid/'+id;
        return this.http.get(baseUrl+url).toPromise();
    }

    endTask(id:number){
        var url='endtask/'+id;
        return this.http.get(baseUrl+url).toPromise();
    }

}