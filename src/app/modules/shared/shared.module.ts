import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';;
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    LoaderComponent,
    AlertComponent,
    HeaderComponent,
    BreadcrumbComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatPaginatorModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatPaginatorModule,
    LoaderComponent,
    AlertComponent,
    HeaderComponent,
    BreadcrumbComponent,
  ]
})
export class SharedModule { }
