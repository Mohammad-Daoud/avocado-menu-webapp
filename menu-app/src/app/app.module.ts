import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandwichComponent } from './components/sandwich/sandwich.component';
import { JuiceComponent } from './components/juice/juice.component';
import { SidesComponent } from './components/sides/sides.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { OffersComponent } from './components/offers/offers.component';

const routes: Routes = [
  { path: 'sandwich', component: SandwichComponent },
  { path: 'juice', component: JuiceComponent },
  { path: 'sides', component: SidesComponent },
  {path: "offers", component: OffersComponent},
  { path: '**',  component:DefaultPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SandwichComponent,
    JuiceComponent,
    SidesComponent,
    DefaultPageComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
