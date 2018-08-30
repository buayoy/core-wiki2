import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Wiki } from '../../model/wiki';
import { CanActivateViaAuthGuard } from '../../can-activate-via-auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  constructor(private auth:AngularFireAuth,
              private router:Router,
              private activate:CanActivateViaAuthGuard) {
                this.auth.authState.subscribe(user=>{
                  if(user !=null){
                    this.router.navigate(['/dashboard'])
                  }else{
                    this.router.navigate([''])
                  }
                })

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
    
    
  }
  Logout(){
    this.auth.auth.signOut();
      this.router.navigate([''])
  }
}
