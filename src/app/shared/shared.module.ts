import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CropDialogComponent } from './components/crop-dialog/crop-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatSortModule } from '@angular/material/sort';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditDialogComponent } from './components/add-edit-dialog/add-edit-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { NoDataComponent } from './components/no-data/no-data.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ViewUserProfileComponent } from './components/view-user-profile/view-user-profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CropDialogComponent,
    TableComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    NotFoundComponent,
    HeaderSectionComponent,
    AddEditDialogComponent,
    HeaderSectionComponent,
    NotFoundComponent,
    NoDataComponent,
    DeleteItemComponent,
    PaginatorComponent,
    ViewUserProfileComponent,
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ImageCropperModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    NgxDropzoneModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CropDialogComponent,
    MatIconModule,
    TableComponent,
    NavbarComponent,
    HomeComponent,
    MatPaginatorModule,
    SidebarComponent,
    MatSortModule,
    HeaderSectionComponent,
    MatCardModule,
    FormsModule,
    AddEditDialogComponent,
    MatSelectModule,
    MatChipsModule,
    MatSelectModule,
    SidebarComponent,
    NoDataComponent,
    DragDropModule,
    PaginatorComponent,
    ViewUserProfileComponent,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModule { }
