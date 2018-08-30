import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';



import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TestComponent } from './views/test/test.component';
import { WikiComponent } from './views/test/wiki/wiki.component';
import { FirebaseService } from './service/firebase.service';
import { FirebaseConfig } from '../environments/firebase';
import { RouterModule } from '@angular/router';
import { WikiHomeComponent } from './views/test/wiki-home/wiki-home.component';
import { HomeComponent } from './home/home.component';
import { CreateStockComponent } from './views/test/create-stock/create-stock.component';
import { HttpComponent } from './views/test/http/http.component'

import { FileSizePipe } from './file-size.pipe';
;
import { HttpClientModule } from '@angular/common/http';
import { ResetpassComponent } from './views/resetpass/resetpass.component'
import { CanActivateViaAuthGuard } from './can-activate-via-auth.guard';
import { AuthService } from './auth.service';


@NgModule({
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    AngularFireAuthModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    FileSizePipe,

    RegisterComponent,
    TestComponent,
    WikiComponent,
    WikiHomeComponent,
    HomeComponent,
    CreateStockComponent,
    HttpComponent,
    ResetpassComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  FirebaseService,CanActivateViaAuthGuard,AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
