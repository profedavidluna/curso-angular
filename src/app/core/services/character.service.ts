import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Character, ApiResponse } from '../models/character.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly characters = signal<Character[]>([]);

  readonly total = computed(() => this.characters().length);

  loadCharacters(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<ApiResponse<Character>>(this.apiUrl).subscribe({
      next: (response) => {
        this.characters.set(response.results);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los personajes. Intenta de nuevo.');
        this.loading.set(false);
        console.error(err);
      },
    });
  }
}
