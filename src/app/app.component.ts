import { Component } from '@angular/core';
import { EmailService } from './services/email.service';
import { Email } from './models/email';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mirsan Laboratorio';


  name: String;
  email: String;
  message: String;

  constructor(private emailService: EmailService){}

  enviarEmail(nuevoEmail: Email){
    this.emailService.enviarEmail(nuevoEmail).subscribe(
      (emailEnviado) => {
        console.log('correo enviado', emailEnviado)
      }
    ),
    (error) => {
      console.error('Error al enviar el correo:', error);
    }
  }
}
