import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  createPosts(post: Post) {
    let data: Post[] = JSON.parse(localStorage.getItem('post') || '[]');
    data.push(post);
    localStorage.setItem('post', JSON.stringify(data));
  }
  getalldata() {
    let alldata: Post[] = JSON.parse(localStorage.getItem('post') || '[]');
    return alldata;
  }
  deletePost(id: number): void {
    let alldata: Post[] = JSON.parse(localStorage.getItem('post') || '[]');
    for (let i = 0; i < alldata.length; i++) {
      if (alldata[i].id === id) {
        alldata.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('post', JSON.stringify(alldata));
  }
}
