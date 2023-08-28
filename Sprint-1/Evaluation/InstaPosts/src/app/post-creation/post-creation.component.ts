import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css'],
})
export class PostCreationComponent implements OnInit {
  ngOnInit(): void {
    this.getallposts();
  }
  // id!: number;
  title!: string;
  username!: string;
  data: Post[] = [];
  count = 1;
  constructor(private postService: PostService) {}
  HandleSubmit() {
    let dataobj = {
      id: this.data.length + 1 + Math.floor(Math.random() * 10),
      username: this.username,
      title: this.title,
    };
    this.postService.createPosts(dataobj);
    this.getallposts();
    alert('post Created Succesfully');
  }
  getallposts() {
    this.data = this.postService.getalldata();
  }
  deleteposts(id: number) {
    this.postService.deletePost(id);
    this.getallposts();
  }
  increaselike() {
    this.count++;
  }
  decrese() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
