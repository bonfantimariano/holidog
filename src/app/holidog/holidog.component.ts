import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-holidog',
  templateUrl: './holidog.component.html',
  styleUrls: ['./holidog.component.css']
})
export class HolidogComponent implements OnInit {

    data: any;
    images: any = [];
    breeds: any = [];
    image = "";
    breedSelected = false;

    constructor(private rest:RestService) { }

    ngOnInit() {
        // get random image
        this.rest.getRandomImage().subscribe((data: {}) => {
            this.data = data;
            this.image = this.data.message;
        });


        this.getBreeds();

    }

    // Load select control with breeds
    getBreeds() {
        this.rest.getAllBreeds().subscribe((data: {}) => {
            this.data = data;
            this.breeds =  Object.keys(this.data.message);
        });
    }
    // On change select control
    onChange(deviceValue) {
        console.log(deviceValue);
        this.breedSelected = true;
        this.rest.getByBreed(deviceValue).subscribe((data: {}) => {
            console.log(data);
            this.data = data;
            this.images = this.data.message;
            this.image = this.data.message[0];
        });
    }

    onClick() {
        let index = Math.floor(Math.random() * this.images.length) + 1;
        this.image = this.images[index];
    }

}
