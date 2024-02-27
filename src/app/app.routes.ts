import { Routes } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionsContentComponent } from './subscriptions-content/subscriptions-content.component';
import { MainContentComponent } from './main-content/main-content.component';


export const routes: Routes = [
    {
        path: '',
        component: MainContentComponent
    },
    {
        path: 'subscriptions',
        component: SubscriptionsContentComponent
    }
];
