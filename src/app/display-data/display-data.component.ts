import { Component, Input } from '@angular/core';
import { Student } from '../Models/Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent {
   @Input() studentData : Student[] = []

    // change detection  lyfe sycle hook
   ngOnInit(){
    console.log(this.studentData)
   }

}
