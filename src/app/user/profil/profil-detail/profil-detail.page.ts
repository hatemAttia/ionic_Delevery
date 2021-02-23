import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-profil-detail',
  templateUrl: './profil-detail.page.html',
  styleUrls: ['./profil-detail.page.scss'],
})
export class ProfilDetailPage implements OnInit {
  loading: any;
  userData:any;
  _updateUser = false;
  numTel:number;
  _lastName;
  _firstName;
  constructor(
    private router: Router,
    public userServ: UserService,
    public loadingController: LoadingController) {
      this.numTel=57290802;
    this.userData = new User();
    
  }

  ngOnInit() {
    this.Display();
  }
  /**
  * Navigation
  * @param path: string; ;
  */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }


  Display() {
    this.userServ.getUserData().subscribe(response => {
      this.userData = response;
      this._firstName=response.firstName;
      this._lastName=response.lastName;
    })

  }
  updateUserToggle() {
    this._updateUser=true;
  }

  updateUser(){
   console.log(this.userData)
    this.userServ.updateUser(this.userData,1).subscribe(response =>{
    });
    this._updateUser=false;
  }
  /**
   * Loading message
   */
  async loadingMessage() {
    this.loading = await this.loadingController.create({
      message: ' en cours...'
    });
    await this.loading.present();
  }
  /**
     * Loader dismiss
     */
  loaderDismiss() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }
}



