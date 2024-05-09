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

import { TypeDemandeCreateAdminComponent } from './type-demande/create/type-demande-create-admin.component';
import { TypeDemandeEditAdminComponent } from './type-demande/edit/type-demande-edit-admin.component';
import { TypeDemandeViewAdminComponent } from './type-demande/view/type-demande-view-admin.component';
import { TypeDemandeListAdminComponent } from './type-demande/list/type-demande-list-admin.component';
import { DemandePieceJointCreateAdminComponent } from './demande-piece-joint/create/demande-piece-joint-create-admin.component';
import { DemandePieceJointEditAdminComponent } from './demande-piece-joint/edit/demande-piece-joint-edit-admin.component';
import { DemandePieceJointViewAdminComponent } from './demande-piece-joint/view/demande-piece-joint-view-admin.component';
import { DemandePieceJointListAdminComponent } from './demande-piece-joint/list/demande-piece-joint-list-admin.component';
import { EtatDemandeCreateAdminComponent } from './etat-demande/create/etat-demande-create-admin.component';
import { EtatDemandeEditAdminComponent } from './etat-demande/edit/etat-demande-edit-admin.component';
import { EtatDemandeViewAdminComponent } from './etat-demande/view/etat-demande-view-admin.component';
import { EtatDemandeListAdminComponent } from './etat-demande/list/etat-demande-list-admin.component';
import { DemandeCreateAdminComponent } from './demande/create/demande-create-admin.component';
import { DemandeEditAdminComponent } from './demande/edit/demande-edit-admin.component';
import { DemandeViewAdminComponent } from './demande/view/demande-view-admin.component';
import { DemandeListAdminComponent } from './demande/list/demande-list-admin.component';

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
import {RippleModule} from "primeng/ripple";
import { DemandeTraiteComponent } from './demande-traite/demande-traite.component';



@NgModule({
  declarations: [

    TypeDemandeCreateAdminComponent,
    TypeDemandeListAdminComponent,
    TypeDemandeViewAdminComponent,
    TypeDemandeEditAdminComponent,
    DemandePieceJointCreateAdminComponent,
    DemandePieceJointListAdminComponent,
    DemandePieceJointViewAdminComponent,
    DemandePieceJointEditAdminComponent,
    EtatDemandeCreateAdminComponent,
    EtatDemandeListAdminComponent,
    EtatDemandeViewAdminComponent,
    EtatDemandeEditAdminComponent,
    DemandeCreateAdminComponent,
    DemandeListAdminComponent,
    DemandeViewAdminComponent,
    DemandeEditAdminComponent,
    DemandeTraiteComponent,
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
        RippleModule,

    ],
  exports: [
  TypeDemandeCreateAdminComponent,
  TypeDemandeListAdminComponent,
  TypeDemandeViewAdminComponent,
  TypeDemandeEditAdminComponent,
  DemandePieceJointCreateAdminComponent,
  DemandePieceJointListAdminComponent,
  DemandePieceJointViewAdminComponent,
  DemandePieceJointEditAdminComponent,
  EtatDemandeCreateAdminComponent,
  EtatDemandeListAdminComponent,
  EtatDemandeViewAdminComponent,
  EtatDemandeEditAdminComponent,
  DemandeCreateAdminComponent,
  DemandeListAdminComponent,
  DemandeViewAdminComponent,
  DemandeEditAdminComponent,
  ],
})
export class DemandeAdminModule { }
