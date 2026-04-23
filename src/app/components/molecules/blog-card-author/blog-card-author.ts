import { Component, input } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar';

@Component({
  selector: 'app-blog-card-author',
  imports: [AvatarComponent],
  templateUrl: './blog-card-author.html',
  styleUrl: './blog-card-author.scss',
})
export class BlogCardAuthorComponent {
  name = input.required<string>();
  role = input.required<string>();
  avatar = input.required<string>();
}
