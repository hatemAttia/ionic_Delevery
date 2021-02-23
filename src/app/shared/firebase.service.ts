import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Resto } from './models/resto';
import { retry, catchError } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 
  path = "http://localhost:3000/resto";
  _restoId = new BehaviorSubject(null);

  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  
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
     * find resto
     * @param id 
     */
  trouverIdResto(id): Observable<Resto> {
    return this.http.get<Resto>(this.path + "/" + id).pipe(retry(2),
      catchError(this.traitementErreur))
  }

  afficherListe(): Observable<Resto> {
    return this.http.get<Resto>(this.path).pipe(retry(2),
      catchError(this.traitementErreur))
  }

  setRestoId(id:number){
    this._restoId.next(id);
  }
  
  getRestoId(){
    return this._restoId.getValue();
  }

  
}
