import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  players: Array<Player> = [];
  player: Player;
  id: string;
  constructor(private playerService: PlayerService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.id = params.get('id');
    });
    this.playerService.getPlayers().subscribe( players => {
      this.players = players;
    });
  }

  play(_id, status, gameId) {
     console.log(typeof(gameId));
      this.playerService.updatePlayer(_id, status, gameId)
      .subscribe( player => {
        console.log(player);
        this.player = player;
        this.playerService.getPlayers().subscribe( players => {
          this.players = players;
        });
      },
        error => {
          console.log('got an error');
        }
      );

    // if (this.id === '2') {
    //   this.playerService.updatePlayer(_id, status, 2)
    //   .subscribe( player => {
    //     console.log(player);
    //     this.player = player;
    //   },
    //     error => {
    //       console.log('got an error');
    //     }
    //   );
    // }

    // if (this.id === '3') {
    //   this.playerService.updatePlayer(_id, status, 3)
    //   .subscribe( player => {
    //     console.log(player);
    //     this.player = player;
    //   },
    //     error => {
    //       console.log('got an error');
    //     }
    //   );
    // }

  }

}
