import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerStatusComponent } from './player-status/player-status.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'players/list'},
  { path: 'players', children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: PlayerListComponent },
    { path: 'addplayer', component: PlayerAddComponent }
  ]},
  { path: 'status/game/:id', component: PlayerStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
