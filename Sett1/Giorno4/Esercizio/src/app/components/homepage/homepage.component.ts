import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  post!: PostInterface;
  related!: PostInterface[];
  constructor() {
    this.getRandomPosts(4).then((response) => (this.related = response));
  }

  async getRandomPosts(num: number): Promise<PostInterface[]> {
    const response = await fetch('../../assets/db.json');
    const posts = (await response.json()) as Array<PostInterface>;
    const randomPosts: PostInterface[] = [];
    const numHistory: number[] = [];
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * posts.length);
      if (numHistory.includes(random)) continue;
      numHistory.push(random);
      randomPosts.push(posts[random]);
    }
    return randomPosts;
  }

}
