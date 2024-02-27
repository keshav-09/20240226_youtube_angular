import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {
  @Input() chipscontentname:any=
  {

    btn1:"All",
    btn2:"Music",
    btn3:" Sport",
    btn4:"Education",
    btn5:"Recently Uploaded",
    btn6:"Live",
    btn7:"Hindi",
    btn8:"Mortal",
    btn9:"Rega",
    btn10:"Cricket",
    btn11:"khana",
    bt12:"chalo ghumne"

  }


}
