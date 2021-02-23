import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  vari;
  restoData: any;
  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    public userServ: UserService
  ) { }

  ngOnInit() {
  
  }


  /**
    * Navigation
    * @param path: string; ;
    */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }


  onClick() {
    console.log(this.vari);
  }

}
