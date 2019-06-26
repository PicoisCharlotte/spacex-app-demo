import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.scss'],
})
export class PreviousComponent implements OnInit {

  constructor(private _location: Location) { }

    ngOnInit() {}

    previous() {
        this._location.back();
    }

    surprise() {
        location.href = 'https://images3.alphacoders.com/636/636472.jpg';
    }

}
