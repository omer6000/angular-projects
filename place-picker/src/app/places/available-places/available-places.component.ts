import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Subscription, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  CurrentlyFetching = signal<boolean>(false);
  places = signal<Place[] | undefined>(undefined);
  error = signal('');
  // private httpClient = inject(HttpClient)
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.CurrentlyFetching.set(true);
    const subscription : Subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => this.places.set(places),
      complete: () => this.CurrentlyFetching.set(false),
      error: (error : Error) => this.error.set(error.message)
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  onSelectPlace(selectedPlace: Place) {
  this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe();
  }
}