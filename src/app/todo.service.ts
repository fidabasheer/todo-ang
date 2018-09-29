import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url='http://localhost:6028/api/todo';
 

  constructor(private http : Http) { }
  getall(){
    return this.http.get(this.url)
  }
  postit(post){
    return this.http.post(this.url,post)
  }
  delete(post,rem){
    return this.http.delete(this.url + rem)
  }
  
  update(post,change){
 return this.http.put(this.url + '/' + post.todo_id,change)
  }

}
