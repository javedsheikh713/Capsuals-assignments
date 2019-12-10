import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewTaskComponent} from './viewtask.component';
import { AddTaskComponent } from './addtask.component';
import { UpdateTaskComponent } from './updatetask.component';


const routes: Routes = [
{
  path:'',
  component:ViewTaskComponent,
},
{
  path:'task',
  component:ViewTaskComponent,
  
},
{
  path:'addtask',
  component:AddTaskComponent,
  
},
{
  path:'updatetask/:id',
  component:UpdateTaskComponent,
  
},


];


export const routing=RouterModule.forRoot(routes);
