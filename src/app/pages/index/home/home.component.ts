import { Component } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
