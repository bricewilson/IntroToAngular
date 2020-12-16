import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReaderComponent } from "src/app/readers/add-reader/add-reader.component";
import { EditReaderComponent } from "src/app/readers/edit-reader/edit-reader.component";


const routes: Routes = [
  { path: 'addreader', component: AddReaderComponent },
  { path: 'editreader/:id', component: EditReaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadersRoutingModule { }
