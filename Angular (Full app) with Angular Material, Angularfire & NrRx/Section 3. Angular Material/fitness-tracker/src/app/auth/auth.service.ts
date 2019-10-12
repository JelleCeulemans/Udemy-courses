import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';
import { MatSnackBar } from '@angular/material';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(
        private router: Router, 
        private afauth: AngularFireAuth, 
        private trainingService: TrainingService,
        private uiService: UIService,
        private store: Store<{ui: fromApp.State}>
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
        //this.uiService.loadingStateChaged.next(true);
        this.store.dispatch({type: 'START_LOADING'});
        this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.store.dispatch({type: 'STOP_LOADING'});
                //this.uiService.loadingStateChaged.next(false);
            })
            .catch(error => {
                this.store.dispatch({type: 'STOP_LOADING'});
                //this.uiService.loadingStateChaged.next(false);
                this.uiService.showSnackbar(error.message, null, 3000);
            });

    }

    login(authData: AuthData) {
        //this.uiService.loadingStateChaged.next(true);
        this.store.dispatch({type: 'START_LOADING'});
        this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                //this.uiService.loadingStateChaged.next(false);
                this.store.dispatch({type: 'STOP_LOADING'});
            })
            .catch(error => {
                //this.uiService.loadingStateChaged.next(false);
                this.store.dispatch({type: 'STOP_LOADING'});
                this.uiService.showSnackbar(error.message, null, 3000);
            });
    }

    logout() {
        this.afauth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }
}