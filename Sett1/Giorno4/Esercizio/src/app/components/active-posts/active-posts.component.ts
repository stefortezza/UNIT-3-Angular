import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  posts!: PostInterface[];
  constructor() {
    this.getActivePosts().then((response) => (this.posts = response));
  }
  async getActivePosts(): Promise<PostInterface[]> {
    const response = await fetch('../../assets/db.json');
    const posts = (await response.json()) as Array<PostInterface>;

    return posts.filter((post) => post.active);
  }
}
