import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-subscriptions-content',
  standalone: true,
  imports: [],
  templateUrl: './subscriptions-content.component.html',
  styleUrl: './subscriptions-content.component.css'
})
export class SubscriptionsContentComponent {
  @Input() youtubeimg:any ={
    image_url:"https://img.freepik.com/premium-vector/black-yellow-grunge-modern-youtube-thumbnail-background_562076-122.jpg?w=996"
  } 
}
