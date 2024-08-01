import { Component, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.css',
})
export class FooterComponentComponent {
  @Input() wpUrl: string | undefined;
  //@Input() scope: string | undefined;
  
  socialList = [
    {
      id: 1,
      Site: 'Wordpress',
      Link: 'https://tirimaccoezio.wordpress.com'
    },
    {
      id: 2,
      Site: 'Linkedin',
      Link: 'https://it.linkedin.com/in/eziotirimacco'
    },
    {
      id: 3,
      Site: 'Angular',
      Link: 'https://angular.dev/'
    },
  ];
}
