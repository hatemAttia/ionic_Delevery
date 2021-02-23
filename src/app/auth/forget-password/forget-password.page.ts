import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  forgetForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,public toastController:ToastController) { 
    this.forgetForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])]
    });
  }

  ngOnInit() {}

  /**
   * forget password
   */
  forgetPassword() {
    if(this.forgetForm.get('email').valid){
      this.messageToast("verfier ton email !");
    }else {
      this.messageToast("email incorect !");   
    }

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
}


