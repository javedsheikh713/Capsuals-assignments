import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ViewTaskComponent} from './viewtask.component';
import {FooterComponent} from './footer.component';
import {HeaderComponent} from './header.component';
import {AddTaskComponent} from './addtask.component';
import { UpdateTaskComponent } from './updatetask.component';
import { HttpService } from './services/http.service';
import { GrdFilterPipe } from './grd-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
     FooterComponent,
    HeaderComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
   
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
