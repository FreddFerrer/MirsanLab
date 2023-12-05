import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:8080/api/enviar';

  constructor(private http: HttpClient) { }

  enviarEmail(email:Email): Observable<Email> {
    return this.http.post<Email>(this.emailUrl, email)
  }
}
