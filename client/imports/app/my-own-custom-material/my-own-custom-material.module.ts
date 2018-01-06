import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule],
})
export class MyOwnCustomMaterialModule { }
