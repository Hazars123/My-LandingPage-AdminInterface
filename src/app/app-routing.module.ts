import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path:'courses', component:CoursesComponent
  },{
    path:'registrer', component:RegistrerComponent
  },{
    path:'contact-us', component:ContactUsComponent
  },{
    path:'admin', component:AdminComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
