import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {path:'reactive', component:ReactiveComponent},
  {path:'template', component:TemplateComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
