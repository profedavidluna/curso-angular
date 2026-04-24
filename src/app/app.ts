import { Component, OnInit, signal } from '@angular/core';
import { BlogSectionComponent } from './components/templates/blog-section/blog-section';
import { BlogPost } from './models/blog-post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  imports: [BlogSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  readonly blogPosts = signal<BlogPost[]>([]);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.blogPosts.set(posts);
    });
  }
}
