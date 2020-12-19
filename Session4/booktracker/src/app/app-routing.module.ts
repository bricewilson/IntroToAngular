import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  { path: 'readers', loadChildren: () => import('./readers/readers.module').then(m => m.ReadersModule)},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
