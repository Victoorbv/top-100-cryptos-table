import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabla', pathMatch: 'full' },
  { path: 'tabla', component: TableComponent },
  { path: '**', redirectTo: 'tabla' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
