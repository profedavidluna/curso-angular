import { Component, input, computed } from '@angular/core';
import { Character } from '../../../../core/models/character.model';
import { BadgeComponent, BadgeVariant } from '../../atoms/badge/badge';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './character-card.html',
  styleUrl: './character-card.scss',
})
export class CharacterCardComponent {
  readonly character = input.required<Character>();

  readonly statusVariant = computed((): BadgeVariant => {
    const status = this.character().status.toLowerCase();
    if (status === 'alive') return 'alive';
    if (status === 'dead') return 'dead';
    return 'unknown';
  });
}
