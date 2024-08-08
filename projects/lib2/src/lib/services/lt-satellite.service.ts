import {Injectable} from "@angular/core";
import {SatelliteDroparea} from 'satellite-droparea';

@Injectable({providedIn: 'root'})
export class LtSatelliteService {
  instance: SatelliteDroparea | null = null;
  
  init() {
    this.instance = new SatelliteDroparea({} as any)
  }
}