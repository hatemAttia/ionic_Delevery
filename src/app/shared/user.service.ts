import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './models/user';
import { retry, catchError } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { Cart } from './models/cart';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = "http://localhost:3000/user";
  cart = [];
  access_key = "97acd6de4594503e6650844e3abb8c7f";
  _cartData = new Cart();
  _deleveryAdress=[];
  _orderHistory=[];
  _subTotal=0;
  UserId;
  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {

  }

  /**
   * traitement Erreur
   * @param erreur 
   */
  traitementErreur(erreur: HttpErrorResponse) {
    if (erreur.error instanceof ErrorEvent) {
      console.log('Une erreur s est produite', erreur.error.message);
    } else
      console.error("code renvoyé par le backen ${erreur.status},"
        + "le corps était : ${erreur.error}");
    return throwError("quelque chose est arrivé ; Veuillez reessayer plus tard");
  }

  /**
   * add product on cart
   * @param data 
   */
  addproduct(data: any) {
    var search = this.cart.indexOf(data);
    if (search != -1) {
      this.cart[search].amount = (data.amount);
    } else {
      this.cart.push(data);
    }
  }

  /**
   * 
   */
  getCart() {
    return this.cart;
  }

  /**
   * Create User
   * @param element 
   */
  creerUser(element): Observable<User> {
    return this.http.post<User>(this.path, JSON.stringify(element), this.httpOption).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

  /**
   * update User
   * @param element 
   * @param id 
   */
  updateUser(element, id: number): Observable<User> {
    return this.http.put<User>(this.path + "/" + id, JSON.stringify(element), this.httpOption).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

  /**
   * get User Location
   * @param x 
   * @param y 
   */
  getUserAdress(x: number, y: number) {
    return this.http.get("http://api.positionstack.com/v1/reverse?access_key=" + this.access_key + "&query=" + x + "," + y + "&limit=1").pipe(retry(2),
      catchError(this.traitementErreur));
  }

  /**
   * get user Data
   * @param id 
   */
  getUserData() {
    return this.http.get<User>(this.path + "/" + this.UserId).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

  /**
   * get all users Data
   * 
   */
  getAllUsersData() {
    return this.http.get<User>(this.path).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }

  /*addLocation(element,id): Observable<User> {
    var data;
    this.getUserData(1).subscribe(response =>{
    data=response;
    console.log(data);
     data.adresse= element;
    })
    console.log(data);
    return this.http.put<User>(this.path+"/"+id, JSON.stringify(element), this.httpOption).
      pipe(retry(2),
        catchError(this.traitementErreur))
  }*/

  addLocation(element) {
    this._deleveryAdress.push(element)
  }

  getAdresses(){
    return this._deleveryAdress;
  }

  addOrder(element) {
    this._orderHistory.push(element)
  }

  getOrders(){
    return this._orderHistory;
  }

  setSubTotal(totalSub){
    this._subTotal=totalSub;
  }

  getSubTotal(){
    return this._subTotal;
  }

  setUserId(id){
    this.UserId=id;
  }
  getUserId(id){
    return this.UserId;
  }
}
