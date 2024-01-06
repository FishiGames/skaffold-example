import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { TextModel } from "./models/text.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected serverMessage: TextModel = new TextModel();

  constructor(private httpClient: HttpClient) {
    this.getServerMessage().subscribe(x => {
      this.serverMessage = x;
    });
  }

  protected getServerMessage(): Observable<TextModel> {
    return this.httpClient.get<TextModel>("/api/text");
  }
}