import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule , NzButtonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
