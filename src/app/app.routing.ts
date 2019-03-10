import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TestComponent } from './views/test/test.component';
import { WikiComponent } from './views/test/wiki/wiki.component';
import { WikiHomeComponent } from './views/test/wiki-home/wiki-home.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { ResetpassComponent } from './views/resetpass/resetpass.component';
import { CoinhiveComponent } from './views/coinhive/coinhive.component';
import { HashComponent } from './views/hash/hash.component';
import { CoinTableComponent } from './views/coin-table/coin-table.component';
import { EviewComponent } from './views/test/eview/eview.component';
import { Swe442Component } from './cherry/swe442/swe442.component';
import { Home2Component } from './cherryFinal/home/home.component';
import { UserComponent } from './cherryFinal/user/user.component';
import { BusDetailComponent } from './cherryFinal/bus-detail/bus-detail.component';
import { EdituserComponent } from './cherryFinal/edituser/edituser.component';
import { DriverComponent } from './cherryFinal/driver/driver.component';
import { EditDriverComponent } from './cherryFinal/edit-driver/edit-driver.component';
import { CarComponent } from './cherryFinal/car/car.component';
import { EditCarComponent } from './cherryFinal/edit-car/edit-car.component';


export const routes: Routes = [
  
  {
    path: 'databus',
    redirectTo: 'databus',
    pathMatch: 'full',
    },
    {
      path: 'dashboard',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
      },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'swe422',
    component: Swe442Component,
    data: {
      title: 'SWE422 Page'
    }
  },
  {
    path: 'resetpassword',
    component: ResetpassComponent,
    data: {
      title: 'Reset Password Page'
    }
  },
  
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'login'
    }
  },
  {
    path: 'final',
    component: Home2Component,
    data: {
      title: 'final'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'editors',
        loadChildren: './views/editors/editors.module#EditorsModule'
      },
      {
        path: 'forms',
        loadChildren: './views/forms/forms.module#FormsModule'
      },
      {
        path: 'google-maps',
        loadChildren: './views/google-maps/google-maps.module#GoogleMapsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'plugins',
        loadChildren: './views/plugins/plugins.module#PluginsModule'
      },
      {
        path: 'tables',
        loadChildren: './views/tables/tables.module#TablesModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
     
      {
        path: 'apps',
        loadChildren: './views/apps/apps.module#AppsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'test/wiki-home',
        component: WikiHomeComponent,canActivate:[CanActivateViaAuthGuard],
      },
      {
        path: 'test/wiki',
        component: WikiComponent,canActivate:[CanActivateViaAuthGuard],
      },
      {path: 'editWiki/:id',component: WikiComponent,canActivate:[CanActivateViaAuthGuard],},
      {path: 'mining',component: CoinhiveComponent },
      {path:'crypto/hash',component:HashComponent},
      {path: "crypto/coin-table" , component:CoinTableComponent},
      {path: "test/eview" , component:EviewComponent},
      {path:'databus' , component:Home2Component},
      {path:'userbus' , component:UserComponent},
      {path:'databus/detail/:id' , component:BusDetailComponent},
      {path:'user/edit/:id' , component:EdituserComponent},
      {path:'userbus/adduser' , component: RegisterComponent},
      {path: 'driver' , component : DriverComponent},
      {path: 'car' , component : CarComponent},
      {path:'driver/edit/:id' ,component:EditDriverComponent},
      {path:'car/edit/:id' ,component:EditCarComponent},
    {
      path: 'dashboard2',
    component: Home2Component
    },
      
    
      
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
