import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: String;

  ngOnInit(): void{
    this.buttonText = 'Oh Snap!';
  }

  onSnap(): void {
    if (this.faceSnap.isSnapped) {
      this.faceSnap.snaps--;
      this.faceSnap.isSnapped = false;
      this.buttonText = 'Oh Snap!';
    }
    else {
      this.faceSnap.snaps++;
      this.faceSnap.isSnapped = true;
      this.buttonText = 'Oops, un Snap!';
    }
  }

}
