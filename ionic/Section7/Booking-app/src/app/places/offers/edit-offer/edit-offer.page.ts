import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Place } from '../../place.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  placeId: string;
  form: FormGroup;
  isLoading = false;
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placeId = paramMap.get('placeId');
      this.isLoading = true;
      this.placeSub = this.placesService.getPlace(this.placeId).subscribe(place => {
        this.place = place;
      });
      this.form = new FormGroup({
        title: new FormControl(this.place.title, { updateOn: 'blur', validators: [Validators.required] }),
        description: new FormControl(this.place.description, { updateOn: 'blur', validators: [Validators.required, Validators.max(180)] })
      });
      this.isLoading = false;
    }, error => {
      this.alertCtrl.create({
        header: 'An error occured!',
        message: 'Place could not be fetched. Please try again later.',
        buttons: [{text: 'Okay', handler: () => {
          this.router.navigateByUrl('/places/tabs/offers');
        }}]
      }).then(alertEl => alertEl.present());
    });
  }

  onUpdateOffer() {
    if (this.form.invalid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Updating place...'
    }).then(loadingEl => {
      const {title, description} = this.form.value;
      this.placesService.updatePlace(this.place.id, title, description).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigateByUrl('/places/tabs/offers');
      });
    });
  }

  ngOnDestroy() {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

}
