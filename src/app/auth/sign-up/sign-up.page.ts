import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  data: any;
  signupForm: FormGroup;
  constructor(
    private userServ: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    public toastController: ToastController) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],
      lastname: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],

      email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required,
      ])]
    });
    this.data = new User();
  }

  ngOnInit() { }

  /**
   * Navigation
   * @param path: string; ;
   */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  validate(attribut: any) {
    if (!this.signupForm.get(attribut).dirty) {
      this.messageToast(attribut + " obligatoire");
    } else if (!this.signupForm.get(attribut).valid) {
      this.messageToast(attribut + " obligatoire");
    }
  }

  submitForm() {
    this.userServ.creerUser(this.data).subscribe((response) => {
 // console.log(response);
     this.userServ.setUserId(response.id);
      this.navigateTo('home');
    });
  }

  /**
  * Tosat message
  * @param error: string;
  */
  async messageToast(alertMessage: string) {
    const toast = await this.toastController.create({
      message: alertMessage,
      duration: 3000,
    });
    toast.present();
  }

}
