import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
{ path: '', component:FormComponent },
{path:'form',component:FormComponent},
{path:'button',component:ButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
