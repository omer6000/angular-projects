import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, Subscription, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent {
  CurrentlyFetching = signal<boolean>(false);
  private placesService = inject(PlacesService);
  // places = signal<Place[] | undefined>(undefined);
  places = this.placesService.loadedUserPlaces;
  error = signal('');
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.CurrentlyFetching.set(true);
    const subscription : Subscription = this.placesService.loadUserPlaces().subscribe({
      // next: (places) => this.places.set(places),
      complete: () => this.CurrentlyFetching.set(false),
      error: (error : Error) => this.error.set(error.message)
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  onRemovePlace(place: Place) {
    this.placesService.removeUserPlace(place).subscribe();
  }
}
