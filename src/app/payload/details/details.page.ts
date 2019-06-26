import { Component, OnInit } from '@angular/core';
import {Payload} from '../../Models/payload.model';
import {PayloadService} from '../../services/payload.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  payload: Payload;

  constructor(private payloadService: PayloadService) { }

  private getPayloadId(): string {
    return window.location.pathname.split('/').pop();
  }

  ngOnInit() {
    const payloadId = this.getPayloadId();

    this.payloadService.getOnePayload(payloadId).subscribe(result => {
      this.payload = result;
    });

  }

}
