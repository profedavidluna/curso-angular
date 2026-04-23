import { Component, input } from '@angular/core';
import { BlogPost } from '../../../models/blog-post.model';
import { BlogCardMetaComponent } from '../../molecules/blog-card-meta/blog-card-meta';
import { BlogCardAuthorComponent } from '../../molecules/blog-card-author/blog-card-author';

@Component({
  selector: 'app-blog-card',
  imports: [BlogCardMetaComponent, BlogCardAuthorComponent],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCardComponent {
  post = input.required<BlogPost>();
}
