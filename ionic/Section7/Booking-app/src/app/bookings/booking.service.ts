import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, tap, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookingService {
    private bookings = new BehaviorSubject<Booking[]>([]);

    get getBookings() {
        return this.bookings.asObservable();
    }

    constructor(
        private authService: AuthService) { }

    addBooking(placeId: string, placeTitle: string, placeImage: string, firstName: string, lastName: string, guestNumber: number, dateFrom: Date, dateTo: Date) {
        console.log(firstName);
        const newBooking = new Booking(Math.random().toString(), placeId, this.authService.getUserId,
            placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
        console.log(newBooking);
        return this.getBookings.pipe(take(1), delay(1000), tap(bookings => {
            this.bookings.next(bookings.concat(newBooking));
        }));

    }

    cancelBooking(bookingId: string) {
        return this.getBookings.pipe(take(1), delay(1000), tap(bookings => {
            this.bookings.next(bookings.filter(b => b.id !== bookingId));
        }));
    }
}
