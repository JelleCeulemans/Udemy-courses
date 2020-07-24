import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, tap, delay, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface BookingData {
    bookedFrom: string;
    bookedTo: string;
    firstName: string;
    guestNumber: number;
    lastName: string;
    placeId: string;
    placeImage: string;
    placeTitle: string;
    userId: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
    private baseURL = environment.baseURL + '/bookings';
    private bookings = new BehaviorSubject<Booking[]>([]);

    get getBookings() {
        return this.bookings.asObservable();
    }

    constructor(
        private authService: AuthService,
        private http: HttpClient) { }

    addBooking(placeId: string, placeTitle: string, placeImage: string, firstName: string, lastName: string, guestNumber: number, dateFrom: Date, dateTo: Date) {
        let generatedId: string;
        const newBooking = new Booking(Math.random().toString(), placeId, this.authService.getUserId,
            placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
        return this.http.post<{ name: string }>(this.baseURL + '.json', { ...newBooking, id: null }).pipe(
            switchMap(resData => {
                generatedId = resData.name;
                return this.bookings;
            }),
            take(1),
            tap(bookings => {
                newBooking.id = generatedId;
                this.bookings.next(bookings.concat(newBooking));
            }));
    }

    cancelBooking(bookingId: string) {
        return this.http.delete(this.baseURL + `/${bookingId}.json`)
        .pipe(switchMap(() => {
            return this.bookings;
        }), take(1), tap(bookings => {
            this.bookings.next(bookings.filter(b => b.id !== bookingId));
        }));
    }

    fetchBookings() {
        return this.http.get<{ [key: string]: BookingData }>(
            this.baseURL + `.json?orderBy="userId"&equalTo="${this.authService.getUserId}"`)
            .pipe(map(bookingData => {
                const bookings = [];
                for (const key in bookingData) {
                    if (bookingData.hasOwnProperty(key)) {
                        const { placeId, userId, placeTitle, placeImage, firstName, lastName, guestNumber,
                            bookedFrom, bookedTo } = bookingData[key];
                        bookings.push(new Booking(key, placeId, userId, placeTitle, placeImage, firstName,
                            lastName, guestNumber, new Date(bookedFrom), new Date(bookedTo)));
                    }
                }
                return bookings;
            }), tap(bookings => {
                this.bookings.next(bookings);
            }));
    }
}
