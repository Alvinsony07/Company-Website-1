import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [

    { path:'', component: HomePageComponent 
        
    },

    { path:'about', component: AboutPageComponent 
        
    },

    { path:'contact', component: ContactPageComponent 
        
    },


];
