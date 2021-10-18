import { Component } from '@angular/core';
import { AttentionZone, AttentionZoneService } from './services/AttentionZoneService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  attentionZoneData: AttentionZone = new AttentionZone();
  unsubscriber: any;

  constructor(attentionZoneService: AttentionZoneService) {
    this.unsubscriber = attentionZoneService.subject.subscribe(result => {
      this.attentionZoneData = result;
    });
  }

  ngOnDestroy() {
    this.unsubscriber?.unsubscribe();
  }
}
