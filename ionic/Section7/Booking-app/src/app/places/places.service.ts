import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private placesArray: Place[] = [
    new Place('p1',
    'Manhattan Mansion',
    'In the heart of New York',
    'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
    149.99),
    new Place('p2',
    'L\'amour Toujors',
    'A romantic place in Paris!',
    'https://images.squarespace-cdn.com/content/v1/54b30f27e4b07e1bade0f312/1428317526726-Q7LBI1GEG6A3VQE7EM0G/ke17ZwdGBToddI8pDm48kGCBa-cNsuCTEPoILOpZDLxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIjCrV-BKc_ZJBZG3K3zcF9mcZsWbI9otdigLtPkb27ZoKMshLAGzx4R3EDFOm1kBS/image-asset.jpeg',
    189.99),
    new Place('p3',
    'The Foggy Palace',
    'Not your average city trip!',
    'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
    99.99)
  ];

  get places() {
    return [...this.placesArray];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this.placesArray.find(p => p.id === id)};
  }

}
