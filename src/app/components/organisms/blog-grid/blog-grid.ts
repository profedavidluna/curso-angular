import { Component, input } from '@angular/core';
import { BlogPost } from '../../../models/blog-post.model';
import { BlogCardComponent } from '../blog-card/blog-card';

@Component({
  selector: 'app-blog-grid',
  imports: [BlogCardComponent],
  templateUrl: './blog-grid.html',
  styleUrl: './blog-grid.scss',
})
export class BlogGridComponent {
  posts = input.required<BlogPost[]>();
}
