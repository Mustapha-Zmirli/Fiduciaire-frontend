import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { ComptableCreateAdminComponent } from './comptable/create/comptable-create-admin.component';
import { ComptableEditAdminComponent } from './comptable/edit/comptable-edit-admin.component';
import { ComptableViewAdminComponent } from './comptable/view/comptable-view-admin.component';
import { ComptableListAdminComponent } from './comptable/list/comptable-list-admin.component';
import { CategoriePieceJointCreateAdminComponent } from './categorie-piece-joint/create/categorie-piece-joint-create-admin.component';
import { CategoriePieceJointEditAdminComponent } from './categorie-piece-joint/edit/categorie-piece-joint-edit-admin.component';
import { CategoriePieceJointViewAdminComponent } from './categorie-piece-joint/view/categorie-piece-joint-view-admin.component';
import { CategoriePieceJointListAdminComponent } from './categorie-piece-joint/list/categorie-piece-joint-list-admin.component';
import { SocieteCreateAdminComponent } from './societe/create/societe-create-admin.component';
import { SocieteEditAdminComponent } from './societe/edit/societe-edit-admin.component';
import { SocieteViewAdminComponent } from './societe/view/societe-view-admin.component';
import { SocieteListAdminComponent } from './societe/list/societe-list-admin.component';
import { CategorieComptableCreateAdminComponent } from './categorie-comptable/create/categorie-comptable-create-admin.component';
import { CategorieComptableEditAdminComponent } from './categorie-comptable/edit/categorie-comptable-edit-admin.component';
import { CategorieComptableViewAdminComponent } from './categorie-comptable/view/categorie-comptable-view-admin.component';
import { CategorieComptableListAdminComponent } from './categorie-comptable/list/categorie-comptable-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    ComptableCreateAdminComponent,
    ComptableListAdminComponent,
    ComptableViewAdminComponent,
    ComptableEditAdminComponent,
    CategoriePieceJointCreateAdminComponent,
    CategoriePieceJointListAdminComponent,
    CategoriePieceJointViewAdminComponent,
    CategoriePieceJointEditAdminComponent,
    SocieteCreateAdminComponent,
    SocieteListAdminComponent,
    SocieteViewAdminComponent,
    SocieteEditAdminComponent,
    CategorieComptableCreateAdminComponent,
    CategorieComptableListAdminComponent,
    CategorieComptableViewAdminComponent,
    CategorieComptableEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,

  ],
  exports: [
  ComptableCreateAdminComponent,
  ComptableListAdminComponent,
  ComptableViewAdminComponent,
  ComptableEditAdminComponent,
  CategoriePieceJointCreateAdminComponent,
  CategoriePieceJointListAdminComponent,
  CategoriePieceJointViewAdminComponent,
  CategoriePieceJointEditAdminComponent,
  SocieteCreateAdminComponent,
  SocieteListAdminComponent,
  SocieteViewAdminComponent,
  SocieteEditAdminComponent,
  CategorieComptableCreateAdminComponent,
  CategorieComptableListAdminComponent,
  CategorieComptableViewAdminComponent,
  CategorieComptableEditAdminComponent,
  ],
})
export class CommunAdminModule { }
