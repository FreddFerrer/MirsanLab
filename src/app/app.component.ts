import { Component, Input } from '@angular/core';
import { EmailService } from './services/email.service';
import { Email } from './models/email';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private emailService: EmailService,
    private toastr: ToastrService){}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
    
  }

  enviarEmail(nuevoEmail: Email): void {
    this.emailService.enviarEmail(nuevoEmail).subscribe(
      (emailEnviado) => {
        this.toastr.success('Correo enviado con éxito');
        //this.toastr.success(`Docente asignado con éxito a ${emailEnviado.name}`, 'Éxito');
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }
}
