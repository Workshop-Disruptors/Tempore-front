import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayProvider } from '../../providers/display/display';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-rendez-vous',
  templateUrl: 'rendez-vous.html',
  providers: [DisplayProvider]
})
export class RendezVousPage {

  public doctors: any
  searchQuery: string = '';


  constructor(public navCtrl: NavController, public DisplayProvider: DisplayProvider, public alertCtrl: AlertController) {
     this.loadDoctors()
  }

  loadDoctors(){
   return new Promise((resolve, reject) => {
    this.DisplayProvider.listDoctors()
      .then((ans)=> {
        resolve(this.doctors=ans)
      },
      (err)=>{
        console.log(err);
        let alert = this.alertCtrl.create({
        title: "Erreur",
        subTitle: err.error,
        buttons: ['OK']
       });
        reject(alert.present());
      })
    })
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.loadDoctors()
      .then((ans)=>{
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.doctors = this.doctors.filter((doctor) => {
        return (doctor.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    console.log(this.doctors)
    }
    })
  }

    doRefresh(refresher) {
    this.loadDoctors()

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  }

