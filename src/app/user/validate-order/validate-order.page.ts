import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-order',
  templateUrl: './validate-order.page.html',
  styleUrls: ['./validate-order.page.scss'],
})
export class ValidateOrderPage implements OnInit {
  _Adrreses;
  _Total;
  constructor(
    private router: Router,
    public alertController: AlertController,
    public userServ:UserService)
   { }

  ngOnInit() {
    this.Display();
  }

  Display() {
  this._Adrreses= this.userServ.getAdresses();
  this._Total= this.userServ.getSubTotal();
    console.log(this._Total);
}

  /**
    * Navigation
    * @param path: string; ;
    */
   navigateTo(path: string) {
    this.router.navigate([path]);
  }

  async sendOrder(){
    const alert = await this.alertController.create({
      header: 'Thank you for',
      subHeader: 'your Order',
      message: 'you can track the delevery in the "Order" section.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log("hhhhhhh")
          }
        }
      ]
    });
    await alert.present();
  }
  
}
