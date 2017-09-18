import {Injectable, NgZone} from '@angular/core';

@Injectable()
export class ZoneListener {
  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(this.onZoneStable);
    this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
    this.ngZone.onError.subscribe(this.onZoneError);
  }

  onZoneStable(): void {
    console.log('ZoneListener: We are stable');
  }

  onZoneUnstable(): void {
    console.log('ZoneListener: We are unstable');
  }

  onZoneError(error): void {
    console.error('ZoneListener: Error', error instanceof Error ? error.message : error.toString());
  }
}