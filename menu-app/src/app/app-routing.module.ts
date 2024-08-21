import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandwichComponent } from './components/sandwich/sandwich.component';
import { JuiceComponent } from './components/juice/juice.component';
import { SidesComponent } from './components/sides/sides.component';

const routes: Routes = [
  { path: 'sandwich', component: SandwichComponent },
  { path: 'juice', component: JuiceComponent },
  { path: 'sides', component: SidesComponent },
  { path: '', redirectTo: '/juice', pathMatch: 'full' } // Redirect to sandwich by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
