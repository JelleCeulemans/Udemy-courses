import { Component, OnInit, Injectable } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

@Injectable()
export class NewTrainingComponent implements OnInit {
  exercises: Observable<any>;

 
  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    //this.exercises = this.trainingService.getAvailableExercises();
    this.exercises = this.db.collection('availableExercises').valueChanges();
  }

  onStartTraining(form: NgForm) {
    console.log('reached');
    this.trainingService.startExercise(form.value.exercise);
  }

}
