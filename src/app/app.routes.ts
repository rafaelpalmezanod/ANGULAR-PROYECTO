import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MainComponent} from './main/main.component'

export const routes: Routes = [
    {path:'',redirectTo:'main',pathMatch:'full'},
    { path:'about' , component: AboutComponent},
    { path:'contact' , component: ContactComponent},
    { path:'main', component: MainComponent},
   
];
