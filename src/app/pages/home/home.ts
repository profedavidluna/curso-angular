import { Component } from '@angular/core';
import { CharacterListComponent } from '../../shared/components/organisms/character-list/character-list';
import { EpisodeListComponent } from '../../shared/components/organisms/episode-list/episode-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterListComponent, EpisodeListComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePageComponent {}
