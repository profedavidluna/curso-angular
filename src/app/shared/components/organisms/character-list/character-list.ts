import { Component, OnInit, inject } from '@angular/core';
import { CharacterService } from '../../../../core/services/character.service';
import { CharacterCardComponent } from '../../molecules/character-card/character-card';
import { LoadingSpinnerComponent } from '../../atoms/loading-spinner/loading-spinner';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent, LoadingSpinnerComponent],
  templateUrl: './character-list.html',
  styleUrl: './character-list.scss',
})
export class CharacterListComponent implements OnInit {
  readonly characterService = inject(CharacterService);

  ngOnInit(): void {
    this.characterService.loadCharacters();
  }
}
