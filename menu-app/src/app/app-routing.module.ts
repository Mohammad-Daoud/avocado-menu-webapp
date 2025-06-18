import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SandwichComponent} from './components/sandwich/sandwich.component';
import {JuiceComponent} from './components/juice/juice.component';
import {SidesComponent} from './components/sides/sides.component';
import {DefaultPageComponent} from "./components/default-page/default-page.component";

const routes: Routes = [
    {path: 'sandwich', component: SandwichComponent},
    {path: 'juice', component: JuiceComponent},
    {path: 'sides', component: SidesComponent},
    {path: '**', component: DefaultPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
