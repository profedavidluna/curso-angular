import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../models/episode.model';
import { ApiResponse } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class EpisodeService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://rickandmortyapi.com/api/episode';

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly episodes = signal<Episode[]>([]);

  readonly total = computed(() => this.episodes().length);

  loadEpisodes(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<ApiResponse<Episode>>(this.apiUrl).subscribe({
      next: (response) => {
        this.episodes.set(response.results);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los episodios. Intenta de nuevo.');
        this.loading.set(false);
        console.error(err);
      },
    });
  }
}
