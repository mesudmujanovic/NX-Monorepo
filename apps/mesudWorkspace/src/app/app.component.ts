import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CategoryService } from '@org/category';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mesudWorkspace';

  categories = inject(CategoryService);
}
