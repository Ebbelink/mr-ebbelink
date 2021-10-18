import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AttentionZoneService {
  private currentData: AttentionZone = new AttentionZone();

  public subject: BehaviorSubject<AttentionZone>;

  constructor() {
    this.subject = new BehaviorSubject(this.currentData);
  }

  changeAttentionZone(message: AttentionZone) {
    this.subject.next(message)
  }
}

export class AttentionZone {
  Header: string = "";
  SubHeader: string = "";
}