import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosComponent } from './components/bolos/bolos.component';
import { DocesComponent } from './components/doces/doces.component';

const routes: Routes = [
  {path: 'bolos', component: BolosComponent},
  {path: 'doces', component: DocesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
