import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'google-maps.component.html',
  styleUrls: ['google-maps.component.css'],
})
export class GoogleMapsComponent {
  title: string = '';
  lat: number = 13.7797933;
  lng: number = 100.5351396;
  zoom: number = 11;

  markers: marker[] = [
    {
      lat: 13.7797933,
      lng: 100.5351396,
      label: 'PRD',
      draggable: false,
      title: 'กรมประชาสัมพันธ์',
      www: 'http://www.prd.go.th'
    }
  ]
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  title: string;
  www: string;
}
