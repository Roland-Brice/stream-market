import { Component, NgModule } from '@angular/core';
import { ComponentsModule } from "../components.module";
/**
 * Generated class for the PlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  text: string;

  tracks: any;
  playing: boolean = true;
  currentTrack: any;
  progressInterval: any;

  constructor() {
    console.log('Hello PlayerComponent Component');
    this.text = 'Hello World';
    this.tracks = [
      {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0},
      {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0},
      {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0},
      {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0},
      {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0},
      {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0},
      {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0},
      {title: 'They Say', artist: 'Kilter', playing: false, progress: 0}
  ];

  this.currentTrack = this.tracks[0];
  }
  playTrack(track){
 
    // First stop any currently playing tracks

    for(let checkTrack of this.tracks){

        if(checkTrack.playing){
            this.pauseTrack(checkTrack);
        }

    }

    track.playing = true;
    this.currentTrack = track;

    // Simulate track playing
    this.progressInterval = setInterval(() => {

        track.progress < 100 ? track.progress++ : track.progress = 0;

    }, 1000);

}

pauseTrack(track){

    track.playing = false;
    clearInterval(this.progressInterval);

}

nextTrack(){

    let index = this.tracks.indexOf(this.currentTrack);
    index >= this.tracks.length - 1 ? index = 0 : index++;

    this.playTrack(this.tracks[index]);

}

prevTrack(){

    let index = this.tracks.indexOf(this.currentTrack);
    index > 0 ? index-- : index = this.tracks.length - 1;

    this.playTrack(this.tracks[index]);

}


}
