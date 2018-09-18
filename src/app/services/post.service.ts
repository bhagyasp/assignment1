import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}  

   getPosts(){
    return this.http.get(this.url);
  }
  createCustomer(post){
    return this.http.post(this.url,JSON.stringify(post.value));
  }
  updateCustomer(post){
    return this.http.post(this.url,JSON.stringify(post.value));
  }
  deleteCustomer(id){
    return this.http.delete(this.url +'/'+ id)
  }
}
