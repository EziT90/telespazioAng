import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { GridComponentComponent } from "./grid-component/grid-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, FooterComponentComponent, GridComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //template: `<app-header-component [header]="headerTitle"></app-header-component>`
})
export class AppComponent {

  headerTitle: string = 'Creazione componenti angular';
  scope: string = 'Test pratico 2';

}
