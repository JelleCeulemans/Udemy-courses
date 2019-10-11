import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';
import { MatSnackBar } from '@angular/material';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(
        private router: Router, 
        private afauth: AngularFireAuth, 
        private trainingService: TrainingService,
        private snackbar: MatSnackBar,
        private uiService: UIService
        ) {}

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
        this.uiService.loadingStateChaged.next(true);
        this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.uiService.loadingStateChaged.next(false);
            })
            .catch(error => {
                this.uiService.loadingStateChaged.next(false);
                this.snackbar.open(error.message, null, {
                    duration: 3000
                });
            });

    }

    login(authData: AuthData) {
        this.uiService.loadingStateChaged.next(true);
        this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.uiService.loadingStateChaged.next(false);
            })
            .catch(error => {
                this.uiService.loadingStateChaged.next(false);
                this.snackbar.open(error.message, null, {
                    duration: 3000
                });
            });
    }

    logout() {
        this.afauth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }
}