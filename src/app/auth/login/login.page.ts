import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: any;
  loginForm: FormGroup;
  validAccount = false;
  validemail = false;
  userId;
  constructor(private router: Router,
    public loadingController: LoadingController,
    public userServ: UserService,
    private formBuilder: FormBuilder,
    public toastController: ToastController) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  /**
   * Navigation
   * @param path: string; ;
   */
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  /**
   * login
   */
  login() {
    this.loadingMessage();
    if (this.loginForm.get('email').valid && this.loginForm.get('password').valid) {
      this.userServ.getAllUsersData().subscribe(resp => {
        for (let i in resp) {
          if (resp[i].email === this.loginForm.get('email').value && resp[i].password === this.loginForm.get('password').value) {
            this.validAccount = true;
            this.userId=resp[i].id;
          } else if (resp[i].email === this.loginForm.get('email').value) {
            this.validemail = true;
          }
        }
        this.loaderDismiss();
      });
    }
    this.loaderDismiss();
  }

  /**
   * Tosat message
   * @param alertMessage: string;
   */
  async messageToast(alertMessage: string) {
    const toast = await this.toastController.create({
      message: alertMessage,
      duration: 3000
    });
    toast.present();
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
      if (this.validAccount) {
        this.userServ.setUserId(this.userId);
        this.navigateTo('home');
        this.loginForm.setValue({email :"",password :""}); 
      } else if (this.validemail) {
        this.messageToast("your email or password is incorect");
      } else {
        this.messageToast("Account not exist");
      }
    }, 1000);
  }
}

