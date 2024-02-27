import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {
  constructor(private router: Router) {}
}
