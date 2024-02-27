import { Component ,Input} from '@angular/core';
import { channel } from 'diagnostics_channel';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
@Input() youtubeimg:any ={
  image_url:"https://ihitthebutton.com/wp-content/uploads/2023/04/youtube-thumbnail-size-1-1536x864.jpg",
  caption:"Padhai kesi chal rahi hai?",
  info:"10B views • 1 Months Ago",
  channelname:"Naam me kyaa rakha h"


} 
}
