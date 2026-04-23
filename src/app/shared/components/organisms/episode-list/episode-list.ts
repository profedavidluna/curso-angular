import { Component, OnInit, inject } from '@angular/core';
import { EpisodeService } from '../../../../core/services/episode.service';
import { EpisodeCardComponent } from '../../molecules/episode-card/episode-card';
import { LoadingSpinnerComponent } from '../../atoms/loading-spinner/loading-spinner';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [EpisodeCardComponent, LoadingSpinnerComponent],
  templateUrl: './episode-list.html',
  styleUrl: './episode-list.scss',
})
export class EpisodeListComponent implements OnInit {
  readonly episodeService = inject(EpisodeService);

  ngOnInit(): void {
    this.episodeService.loadEpisodes();
  }
}
