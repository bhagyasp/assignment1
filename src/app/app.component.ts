import { PostService } from './services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FilterPipe, SortByPipe} from './filter.pipe';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { PaginationComponent } from './pagination/pagination.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts:any[];
  
  allItems: any[];// array of all items to be paged
  pager: any = {};// pager object
  pagedItems: any[];// paged items
  constructor(private service: PostService, private dialog:MatDialog, private pagerService: PaginationComponent ) {
  }
  ngOnInit(){
    this.service.getPosts()
  .subscribe(response => {
    this.allItems = response.json();
    //this.posts = response.json();
    this.setPage(1);
  });
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
 /*  for creating new customer */
 createCustomer(){
    this.dialog.open(CreateCustomerComponent, {
      width: '350px'
      
    })
    .afterClosed()
    .subscribe(result => console.log("bhagya"+result));
    
    /*let post = {title : input.value};
    this.http.post(this.url,JSON.stringify(post));*/
  }
  
  updateCustomer(post){
    this.dialog.open(CreateCustomerComponent, {
      width: '350px',
      data :{fullListObj :post,updObj : true}
    })
    .afterClosed()
    .subscribe(result => console.log(result))
  }
  deleteCustomer(post){
    this.service.deleteCustomer(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      console.log(index);
      this.posts.splice(index,1);
    })
  }
}
