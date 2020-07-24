import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  baseURL = environment.baseURL + '/offered-places';
  private placesArray = new BehaviorSubject<Place[]>([]);

  get places() {
    return this.placesArray.asObservable();
  }

  constructor(
    private authService: AuthService,
    private http: HttpClient) { }

  fetchPlaces() {
    return this.http.get<{ [key: string]: PlaceData }>(this.baseURL + '.json').pipe(map(resData => {
      const places = [];
      for (const key in resData) {
        if (resData.hasOwnProperty(key)) {
          const { title, description, imageUrl, price, availableFrom, availableTo, userId } = resData[key];
          places.push(new Place(key, title, description, imageUrl, price, new Date(availableFrom), new Date(availableTo), userId));
        }
      }
      return places;
    }),
      tap(places => {
        this.placesArray.next(places);
      }));
  }

  getPlace(id: string) {
    // return this.places.pipe(take(1), map(places => places.find(p => p.id === id)));
    // // return { ...this.placesArray.find(p => p.id === id) };
    return this.http.get<PlaceData>(this.baseURL + '/' + id + '.json').pipe(
      map(placeData => {
        const { title, description, imageUrl, price, availableFrom, availableTo, userId } = placeData;
        return new Place(id, title, description, imageUrl, price, new Date(availableFrom), new Date(availableTo), userId);
      }));
  }


  addPlace(title: string, description: string, price: number, availableFrom: Date, availableTo: Date) {

    let generatedId: string;
    const newPlace = new Place(
      Math.random().toString(), title, description,
      'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
      price, availableFrom, availableTo, this.authService.getUserId);
    return this.http.post<{ name: string }>(this.baseURL + '.json', { ...newPlace, id: null }).pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.places;
      }),
      take(1),
      tap(places => {
        newPlace.id = generatedId;
        this.placesArray.next(places.concat(newPlace));
      })
    );

  }

  // updatePlace(placeId: string, title: string, description: string) {
  //   let updatedPlaces: Place[];
  //   this.places.pipe(take(1), switchMap(places => {
  //     const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
  //     updatedPlaces = [...places];
  //     const oldPlace = updatedPlaces[updatedPlaceIndex];
  //     oldPlace.title = title;
  //     oldPlace.description = description;
  //     updatedPlaces[updatedPlaceIndex] = oldPlace;
  //     this.http.put(this.baseURL + '/' + placeId + '.json', { ...updatedPlaces[updatedPlaceIndex], id: null });
  //   }), tap(() => {
  //     this.placesArray.next(updatedPlaces);
  //   })
  //   );
  // }

  updatePlace(placeId: string, title: string, description: string) {
    let updatedPlaces: Place[];
    return this.places.pipe(
      take(1),
      switchMap(places => {
        if (!places || places.length <= 0) {
          return this.fetchPlaces();
        } else {
          return of(places);
        }
      }),
      switchMap(places => {
        if (!places || places.length <= 0) {
          return this.fetchPlaces();
        } else {
          return of(places);
        }
      }),
      switchMap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );
        return this.http.put(this.baseURL + '/' + placeId + '.json', { ...updatedPlaces[updatedPlaceIndex], id: null });
      }),
      tap(() => {
        this.placesArray.next(updatedPlaces);
      })
    );
  }
}
