import { Component ,Input} from '@angular/core';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { channel } from 'diagnostics_channel';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SubscriptionsComponent,HomeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}
  navigateToSubscriptions() {
    this.router.navigate(['/subscriptions']);
  }
  //This are the text is use in sidebar
  @Input() text:any={
    text1:"Shorts",
    text2:"You",
    text3:"History",
    text4:"Your videos",
    text5:"Watch later",
    text6:"Liked videos",
    text7:"Show more",
    text8:" Subscriptions",
    channel1:"Flying Beast",
    channel2:"T-series",
    channel3:"Mortal",
    channel4:"Khana banaye",
    text9:"Setting",
    text10:"Report history",
    text11:"Send Feedback",
   
  }
}
