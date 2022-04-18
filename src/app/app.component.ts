import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    mySnap!:FaceSnap;
    myOtherSnap!:FaceSnap;
    myLastSnap!:FaceSnap;

    ngOnInit(): void {
        this.mySnap = new FaceSnap(
            'Archibald', 
            'Mon meilleur ami depuis tout petit!', 
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            new Date(),
            0,
            false,
        );
        this.myOtherSnap = new FaceSnap(
            'Pâques', 
            'Joyeuse Pâque!', 
            'https://cdn.pixabay.com/photo/2022/04/02/12/32/easter-tree-7106933_960_720.jpg',
            new Date(),
            0,
            false,
        );
        this.myLastSnap = new FaceSnap(
            'Maison', 
            'La nature!', 
            'https://cdn.pixabay.com/photo/2020/01/09/03/43/mansion-4751778_960_720.jpg',
            new Date(),
            0,
            false,
        );
    }
}
