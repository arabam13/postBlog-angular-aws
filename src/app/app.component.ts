import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service.js';
import { HeaderComponent } from './header/header.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Post Blog App';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Add your initialization logic here
    this.authService.autoAuthUser();
  }
}
