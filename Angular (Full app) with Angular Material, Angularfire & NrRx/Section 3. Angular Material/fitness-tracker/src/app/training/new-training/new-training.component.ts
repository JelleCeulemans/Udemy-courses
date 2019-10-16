import { Component, OnInit, Injectable } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { UIService } from 'src/app/shared/ui.service';
import * as fromRoot from '../../app.reducer';
import * as fromTraining from '../training.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

@Injectable()
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<Exercise[]>;

  isLoading$: Observable<boolean>;

 
  constructor(private trainingService: TrainingService, private uiService: UIService, private store: Store<fromTraining.State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExcercises)
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    console.log(form.value.exercise);
    this.trainingService.startExercise(form.value.exercise);
  }
}
