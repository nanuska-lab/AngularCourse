import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserinputComponent } from "./userinput/userinput.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserinputComponent],
})
export class AppComponent {}
