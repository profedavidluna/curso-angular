import { Component, input } from '@angular/core';
import { BadgeComponent } from '../../atoms/badge/badge';

@Component({
  selector: 'app-blog-card-meta',
  imports: [BadgeComponent],
  templateUrl: './blog-card-meta.html',
  styleUrl: './blog-card-meta.scss',
})
export class BlogCardMetaComponent {
  date = input.required<string>();
  category = input.required<string>();
}
