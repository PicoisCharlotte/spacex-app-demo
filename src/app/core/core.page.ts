import { Component, OnInit } from '@angular/core';
import {Core} from '../Models/core.model';
import {Observable} from 'rxjs';
import {CoreService} from '../services/core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.page.html',
  styleUrls: ['./core.page.scss'],
})
export class CorePage implements OnInit {
  cores: Core[];
  core: Core;
  observableCores: Observable<Core[]>;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getCores().subscribe(result => {
      this.cores = result;
    });

    setTimeout(() => {
      this.observableCores = this.coreService.getCores();
    }, 2000);
  }

  getOneCore(coreSerial: string) {
    this.coreService.getOneCore(coreSerial).subscribe(result => {
      this.core = result;
    });
  }
}
