import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { FirebaseService } from '../shared/firebase.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restoData: any;
  categorie = "resto";
  ratingArray = ['', '', '', '', ''];

  constructor(
    public alertController: AlertController,
    public userServ: UserService,
    public apiService: FirebaseService,
    private router: Router,
    private geolocation: Geolocation,
    public menuCtrl: MenuController) {
    this.position();
    this.afficherTous();
  }

  updateCategorie(cat: any) {
    this.categorie = cat;
  }

  openMenu() {
    this.menuCtrl.open();
  }

  /**
   * Navigation
   * @param path: string; ;
   */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  /**
   * Navigation
   * @param path: string; ;
   */
  navigateToResto(path: string, id: number) {
    console.log(id);
    this.apiService.setRestoId(id);
    this.router.navigate([path]);
  }

  afficherTous() {
    this.apiService.afficherListe().subscribe(response => {
      this.restoData = response;
    })
  }

  /**
   * user location
   */
  position() {
    this.geolocation.getCurrentPosition().then((resp: any) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.userServ.getUserAdress(resp.coords.latitude, resp.coords.longitude).subscribe((resp: any) => {
        //   this.userServ.addLocation({adresse :resp.data[0].label  },1)
        this.userServ.addLocation(resp.data[0].label);
      });
    }).catch((error) => {
      this.position();
      console.log('Error getting location', error);
    });
  }

  async logOut(){
    const alert = await this.alertController.create({
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          text: 'ANNULER',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: () => {
            this.navigateTo('login');
            this.userServ.setUserId(null);
          }
        }
      ]
    });
    await alert.present();
  }
  
}
