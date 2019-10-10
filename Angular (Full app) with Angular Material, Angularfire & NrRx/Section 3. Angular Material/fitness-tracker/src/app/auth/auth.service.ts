import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router, private afauth: AngularFireAuth, private trainingService: TrainingService) {

    }

    initAuthListener() {
        this.afauth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            } else {
                this.trainingService.cancelSubscriptions();
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
        });
    }

    registerUser(authData: AuthData) {
        this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.authSuccesfully();
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });

    }

    login(authData: AuthData) {
        this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.authSuccesfully();
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }

    logout() {
        this.afauth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }

    private authSuccesfully() {

    }
}