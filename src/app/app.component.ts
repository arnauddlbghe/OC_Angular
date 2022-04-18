import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    faceSnaps!:FaceSnap[];

    ngOnInit(): void {
        this.faceSnaps = [
        {
            title: 'Archibald', 
            description: 'Mon meilleur ami depuis tout petit!', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            isSnapped: false,
            location: 'France'
        },
        {
            title: 'Archibald2', 
            description: 'Mon meilleur ami depuis tout petit!', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            isSnapped: false,
        },
        {
            title: 'Archibald3', 
            description: 'Mon meilleur ami depuis tout petit!', 
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            isSnapped: false,
        }]
    }
}
