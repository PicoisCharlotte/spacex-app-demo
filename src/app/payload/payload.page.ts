import {Component, OnInit} from '@angular/core';
import {Payload} from '../Models/payload.model';
import {Observable} from 'rxjs';
import {PayloadService} from '../services/payload.service';

@Component({
  selector: 'app-payload',
  templateUrl: './payload.page.html',
  styleUrls: ['./payload.page.scss'],
})
export class PayloadPage implements OnInit {
    payloads: Payload[];
    payload: Payload;
    observablePayloads: Observable<Payload[]>;

    constructor(private payloadService: PayloadService) {
    }

    ngOnInit() {
        this.payloadService.getPayloads().subscribe(result => {
            this.payloads = result;
        });
        setTimeout(() => {
            this.observablePayloads = this.payloadService.getPayloads();
        }, 2000);
    }

    getOnePayload(payloadId: string) {
        this.payloadService.getOnePayload(payloadId).subscribe(result => {
            this.payload = result;
        });
    }
}
