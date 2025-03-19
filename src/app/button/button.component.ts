import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
// input decorator - მშობლიდან შვილში მიაქვს ინფორმაცია
export class ButtonComponent {
     @Input() info? :any
     @Input() btnClass : any
}
