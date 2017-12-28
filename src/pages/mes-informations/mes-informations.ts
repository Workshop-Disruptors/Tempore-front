import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedecinPage } from '../medecin/medecin';
import { RegisterApiProvider } from '../../providers/register-api/register-api';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-mes-informations',
  templateUrl: 'mes-informations.html',
  providers: [RegisterApiProvider]
})
export class MesInformationsPage {
  
  doctorData={
    "name": "",
    "mail": "",
    "password": "",
    "passwordConf": "",
    "city": "",
    "tel": "",
    "description": ""
  };

  constructor(public navCtrl: NavController, public registerApiProvider:RegisterApiProvider, public alertCtrl: AlertController) {

  }

  goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MedecinPage);
  }
  

  update(){
    console.log(this.doctorData)
    this.registerApiProvider.updateDoctor(this.doctorData)
    .then((ans)=> {
        console.log(ans);
        let alert = this.alertCtrl.create({
        title: "Réussi",
        subTitle: String(ans),
        buttons: ['OK']
       });
        alert.present();
        this.goToMedecin({});  
     },
      (err) =>  {
        console.log(err);
        let alert = this.alertCtrl.create({
        title: "Erreur",
        subTitle: err.error,
        buttons: ['OK']
       });
        alert.present();   
         })
  }

}
