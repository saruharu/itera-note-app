import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'notes', loadChildren: () => import('src/modules/notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: '', redirectTo: 'notes/all', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
