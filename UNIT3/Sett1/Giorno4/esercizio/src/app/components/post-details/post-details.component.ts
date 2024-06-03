import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
    postId: number;
    post!: Post;

    constructor(private route: ActivatedRoute) {
        this.postId = Number(this.route.snapshot.params['id']);
        this.getPost().then((data) => {
            this.post = data;
        });
    }

    async getPost() {
        const response = await fetch(`http://localhost:3000/data/${this.postId}`);
        const data = await response.json();
        return data;
    }
}
