import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  infoFromParent = "Log In"
  infoAboutColor = "bgColorGreen"


  buttonClicked(ind:number){
        console.log( `child send id ${ind}`)
  }
}
