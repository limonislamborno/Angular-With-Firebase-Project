import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';


import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


const MaterialComponents = [
  CommonModule,MatButtonModule,MatIconModule,MatButtonToggleModule,MatBadgeModule,MatProgressSpinnerModule,MatToolbarModule
,MatGridListModule,MatSidenavModule,MatCardModule,MatTabsModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatRadioModule
]

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
