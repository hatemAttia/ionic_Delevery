import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.page.html',
  styleUrls: ['./adresses.page.scss'],
})
export class AdressesPage implements OnInit {
  _addresses;

  constructor(private router: Router,
    public userServ: UserService) { }
  _addLocation;
  _addToggle = false;
  ngOnInit() {
    this.display();
  }

  /**
    * Navigation
    * @param path: string; ;
    */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  display() {
    this._addresses = this.userServ.getAdresses();
    console.log(this._addresses);
  }

  toggleAdd() {
    this._addToggle = true;
  }

  addLocation() {
    this._addToggle = false;
    if (this._addLocation !== "") {
      this.userServ.addLocation(this._addLocation);
      this._addLocation = "";
    }
  }
}
