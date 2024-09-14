import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchUserPlaces('http://localhost:3000/places','Failed to fetch available places. Backend is not Running');
  }

  loadUserPlaces() {
    return this.fetchUserPlaces('http://localhost:3000/user-places'
      ,'Failed to fetch your favourite places'
    ).pipe(tap({
      next: (places) => this.userPlaces.set(places)
    }));
  }

  addPlaceToUserPlaces(place: Place) {
    this.userPlaces.update((places) => {
      // Check if the place is already in the array
      if (!places.some(p => p.id === place.id)) {
        return [...places, place];
      }
      return places;
    });
    
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.update((places) => places.filter((p) => p.id !== place.id));
        return throwError(() => new Error('Failed to add place to your favourite places'));
      })
    )
    // .subscribe({
    //   next: (resData) => console.log(resData),
    // });
  }

  removeUserPlace(place: Place) {
    this.userPlaces.update((places) => places.filter((p) => p.id !== place.id));
    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`).pipe(
      catchError((error) => {
        this.userPlaces.update((places) => [...places, place]);
        return throwError(() => new Error('Failed to remove place from your favourite places'));
      })
    )
  }

  private fetchUserPlaces(url: string,errormsg: string) {
    return this.httpClient.get<{places : Place[]}>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => throwError(() => new Error(errormsg)))
    )
  }
}
