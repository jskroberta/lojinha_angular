import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosComponent } from './components/bolos/bolos.component';


const routes: Routes = [
  {path: 'bolos', component: BolosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
