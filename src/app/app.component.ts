import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderPageComponent} from "./components/header-page/header-page.component";
import {FooterPageComponent} from "./components/footer-page/footer-page.component";
import {HomepageComponent} from "./components/homepage/homepage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderPageComponent, FooterPageComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piratascom';
}
