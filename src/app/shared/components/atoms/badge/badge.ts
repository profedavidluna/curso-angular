import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

export type BadgeVariant = 'alive' | 'dead' | 'unknown' | 'episode';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class BadgeComponent {
  readonly text = input.required<string>();
  readonly variant = input<BadgeVariant>('unknown');
}
