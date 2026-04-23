import { Component, input } from '@angular/core';
import { BlogPost } from '../../../models/blog-post.model';
import { BlogGridComponent } from '../../organisms/blog-grid/blog-grid';

@Component({
  selector: 'app-blog-section',
  imports: [BlogGridComponent],
  templateUrl: './blog-section.html',
  styleUrl: './blog-section.scss',
})
export class BlogSectionComponent {
  title = input<string>('Work Blog');
  subtitle = input<string>(
    'We are a passionate digital design agency that specializes in beautiful and easy-to-use digital & Web devlopment services.'
  );
  posts = input.required<BlogPost[]>();
}
