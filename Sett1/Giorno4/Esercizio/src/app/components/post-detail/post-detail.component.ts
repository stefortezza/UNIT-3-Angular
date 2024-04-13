import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from 'src/interfaces/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post: PostInterface | undefined;

  constructor(private route: ActivatedRoute) { //ActivatedRoute viene utilizzato per ottenere il parametro id dall'URL  attivo tramite params['id'].
    this.route.params.subscribe((params) => {
      const postId = Number(params['id']);
      if (!isNaN(postId)) {
        this.getPostDetail(postId);
      }
    });
  }

  async getPostDetail(postId: number): Promise<void> {
    const response = await fetch(`../../assets/db.json`);
    const posts = (await response.json()) as PostInterface[];
    this.post = posts.find((post) => post.id === postId);
  }
}
