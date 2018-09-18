import { PostService } from './services/post.service';
import { FilterPipe, SortByPipe} from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    FilterPipe,
    SortByPipe,
    PaginationComponent
  ],
  entryComponents:[
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [
    CreateCustomerComponent,
    PaginationComponent,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
