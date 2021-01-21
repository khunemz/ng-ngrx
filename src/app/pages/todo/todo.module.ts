import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule , } from 'ng-zorro-antd/form';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';


@NgModule({
  imports: [TodoRoutingModule, 
    NzFormModule, 
    ReactiveFormsModule],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule { }
