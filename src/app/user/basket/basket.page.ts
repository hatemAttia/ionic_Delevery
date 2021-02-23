import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  cartData;
  subTotal=0;
  constructor(
    public userServi: UserService,
    private router: Router) {   
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
    this.  subTotal=0;
    this.cartData=this.userServi.getCart();
    for (let i = 0; i < this.cartData.length; i++) {
     this.subTotal=this.subTotal+this.cartData[i].amount*this.cartData[i].price;
  }
  }

  validOrder(){
    this.userServi.setSubTotal(this.subTotal);
    this.router.navigate(['validate-order']);
  }
}
