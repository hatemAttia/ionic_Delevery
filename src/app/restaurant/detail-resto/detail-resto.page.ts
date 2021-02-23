import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../shared/firebase.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../shared/user.service';
import { Cart } from '../../shared/models/cart';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-resto',
  templateUrl: './detail-resto.page.html',
  styleUrls: ['./detail-resto.page.scss'],
})
export class DetailRestoPage implements OnInit {
  loading: any;
  search = false;
  _cartData = new Cart;
  restoData;
  restoId = new BehaviorSubject(null);
  _name = new BehaviorSubject(null);
  _adresse = new BehaviorSubject(null);
  _rate = new BehaviorSubject(null);
  _srcImg = new BehaviorSubject(null);

  constructor(
    private router: Router,
    public apiUser: UserService,
    public apiService: FirebaseService,
    public loadingController: LoadingController) {
  }

  ngOnInit() {
    this.afficherResto();
  }

  addProductIncart(product: any) {
    this.restoData[product.id - 1].amount = product.amount + 1;
  }

  minusProductIncart(product: any) {
    this.restoData[product.id - 1].amount = product.amount - 1;
  }

  addTocart() {
    this.loadingMessage();
    for (let i = 0; i < this.restoData.length; i++) {
      if (this.restoData[i].amount != 0) {
        this.apiUser.addproduct(this.restoData[i]);
      }
    }

    this.navigateTo('basket')
    /*  for (let i = 0; i < this.restoData.length; i++) {
        if (this.restoData[i].amount != 0) {
          this.restoData[i].amount = 0;
        }
      }*/
    this.loaderDismiss();
  }

  toggleSearch() {
    this.search = !this.search;
  }

  /**
    * Navigation
    * @param path: string; ;
    */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  afficherResto() {
    this.restoId = this.apiService.getRestoId();
    this.apiService.trouverIdResto(this.restoId).subscribe(response => {
      this._name.next(response.name);
      this._adresse.next(response.adresse);
      this._rate.next(response.rate);
      this._srcImg.next(response.src_img);
      this.restoData = response.product;
    })
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
