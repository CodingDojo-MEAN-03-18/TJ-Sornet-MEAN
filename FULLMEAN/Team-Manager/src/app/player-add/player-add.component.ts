import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {
  player: Player = new Player();
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.playerService.createPlayer(this.player).subscribe(player => {
      this.router.navigateByUrl('/');
      this.player = new Player();
      form.reset();
    });
  }

}
