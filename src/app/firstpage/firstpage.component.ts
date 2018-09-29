import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  count=0;

  posts:any;
  constructor(private service : TodoService) { 
 
  }

  ngOnInit() {
  this.service.getall()
    .subscribe(response=>{
      console.log(response.json());
      this.posts=response.json();
      for(let i=0;i<this.posts.length;i++)
      if(this.posts[i].status===0)
      ++this.count
    })
  }
  getall(){
    this.service.getall()
    .subscribe(response=>{
      console.log(response.json());
      this.posts=response.json();
  }
    );}   
  createPost(input:HTMLInputElement){
    let post = {title :input.value,status:0}
    input.value='';
    this.service.postit(post)
    .subscribe(response=>{
      post['id']= response.json().id;
      this.posts.splice(0,0,post)
      this.getall();
        ++this.count
      })
     
   
}
clear1(){
  this.service.delete('','/c' )
  .subscribe(response=>{
    console.log(response.json())
    this.getall();

   } )
}
delete(post){
  this.service.delete(post,'/' + post.todo_id)
  .subscribe(response=>{
  let index=this.posts.indexOf(post)
  this.posts.splice(index,1);
  if(post.status===0)
  --this.count
  })


}
update(index,post){
this.edit(index);
this.service.update(post,{title:post.title,status:post.status})
.subscribe(response=>{
  console.log(response.json())
  this.getall();
  })
}
updateStat(post){
  if(post.status==0)
  this.service.update(post,{status:1}).subscribe(response=>{
    console.log("ststus changed t0 1")
    console.log(response.json())
    this.getall();
        --this.count
     
      })

  
  if(post.status==1)
  this.service.update(post,{status:0})

.subscribe(response=>{
  console.log("status changed to 0")
  console.log(response.json())
  this.getall();
   ++this.count
  })
}

button(status) {
  this.service.getall()
  .subscribe(response => {
    if (status=== 0) {
      let j = 0;
      for (let i = 0; i < response.json().length; ++i) {
        if (response.json()[i].status === status) {
          this.posts.splice(j, 1, response.json()[i]);
        ++j; }
    } this.posts = this.posts.slice(0, j);
    } else if (status=== 1) {
      let j = 0;
      for (let i = 0; i < response.json().length; ++i) {
        if (response.json()[i].status === status) {
          this.posts.splice(j, 1, response.json()[i]);
        ++j; }
    } this.posts = this.posts.slice(0, j);
    } else {
    console.log(response.json());
    this.posts = response.json();  }
  });
}
edit(index){
this.posts[index].isInput=!this.posts[index].isInput 

}
}




