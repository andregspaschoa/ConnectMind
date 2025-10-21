import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() subtitle: string = 'Catapumba';
  @Input() iconClass: string = 'fas fa-info-circle';
  @Input() botaoListar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {   
  }

  list(): void {
    this.router.navigate([`/${this.title.toLowerCase()}/lista`]);
  }
   
   
}
