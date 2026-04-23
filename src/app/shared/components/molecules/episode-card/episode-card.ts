import { Component, input, computed } from '@angular/core';
import { Episode } from '../../../../core/models/episode.model';
import { BadgeComponent } from '../../atoms/badge/badge';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './episode-card.html',
  styleUrl: './episode-card.scss',
})
export class EpisodeCardComponent {
  readonly episode = input.required<Episode>();

  readonly characterCount = computed(() => this.episode().characters.length);
}
