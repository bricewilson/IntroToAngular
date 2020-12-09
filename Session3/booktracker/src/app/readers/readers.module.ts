import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReadersRoutingModule } from './readers-routing.module';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { ReaderLibraryModule } from 'reader-library';


@NgModule({
  declarations: [
    AddReaderComponent,
    EditReaderComponent
  ],
  imports: [
    CommonModule,
    ReadersRoutingModule,
    FormsModule,
    ReaderLibraryModule
  ]
})
export class ReadersModule { }
