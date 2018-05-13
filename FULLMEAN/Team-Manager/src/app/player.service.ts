import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('/players');
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`/players/${id}`);
  }
  updatePlayer(id: string, status: string, gameId: string): Observable<Player> {
    return this.http.get<Player>(`/players/${id}/${status}/${gameId}`);
  }

  createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>('/players', player);
  }

  deletePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(`/${id}`);
  }
}
