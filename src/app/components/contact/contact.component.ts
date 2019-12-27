import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NbToastrService, NbTabComponent } from '@nebular/theme';
import { Router } from '@angular/router';
import { ErrorFoundComponent } from '../error-found/error-found.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;

  ask: string;

  loading = false;

  constructor(private toastrService: NbToastrService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    const lat = 44.106430;
    const lng = 4.102340;

    const coordinates = new google.maps.LatLng(lat, lng);

    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 17,
    };

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    const marker = new google.maps.Marker({
      position: coordinates,
      map: this.map,
    });

    marker.setMap(this.map);
  }

  confirmAsk(position, status) {
    this.toastrService.show(
      status || 'Success',
      `Question sent !`,
      { position, status });

    this.ask = "";
  }

  toggleLoadingAnimation(event: any) {

    if (event.tabTitle === 'Informations') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }

}
