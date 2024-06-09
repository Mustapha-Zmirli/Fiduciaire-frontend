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

import { TypePaiementCreateAdminComponent } from './type-paiement/create/type-paiement-create-admin.component';
import { TypePaiementEditAdminComponent } from './type-paiement/edit/type-paiement-edit-admin.component';
import { TypePaiementViewAdminComponent } from './type-paiement/view/type-paiement-view-admin.component';
import { TypePaiementListAdminComponent } from './type-paiement/list/type-paiement-list-admin.component';
import { PaiementComptableValidateurCreateAdminComponent } from './paiement-comptable-validateur/create/paiement-comptable-validateur-create-admin.component';
import { PaiementComptableValidateurEditAdminComponent } from './paiement-comptable-validateur/edit/paiement-comptable-validateur-edit-admin.component';
import { PaiementComptableValidateurViewAdminComponent } from './paiement-comptable-validateur/view/paiement-comptable-validateur-view-admin.component';
import { PaiementComptableValidateurListAdminComponent } from './paiement-comptable-validateur/list/paiement-comptable-validateur-list-admin.component';
import { PaiementComptableTraitantCreateAdminComponent } from './paiement-comptable-traitant/create/paiement-comptable-traitant-create-admin.component';
import { PaiementComptableTraitantEditAdminComponent } from './paiement-comptable-traitant/edit/paiement-comptable-traitant-edit-admin.component';
import { PaiementComptableTraitantViewAdminComponent } from './paiement-comptable-traitant/view/paiement-comptable-traitant-view-admin.component';
import { PaiementComptableTraitantListAdminComponent } from './paiement-comptable-traitant/list/paiement-comptable-traitant-list-admin.component';
import { PaiementDemandeCreateAdminComponent } from './paiement-demande/create/paiement-demande-create-admin.component';
import { PaiementDemandeEditAdminComponent } from './paiement-demande/edit/paiement-demande-edit-admin.component';
import { PaiementDemandeViewAdminComponent } from './paiement-demande/view/paiement-demande-view-admin.component';
import { PaiementDemandeListAdminComponent } from './paiement-demande/list/paiement-demande-list-admin.component';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [

    TypePaiementCreateAdminComponent,
    TypePaiementListAdminComponent,
    TypePaiementViewAdminComponent,
    TypePaiementEditAdminComponent,
    PaiementComptableValidateurCreateAdminComponent,
    PaiementComptableValidateurListAdminComponent,
    PaiementComptableValidateurViewAdminComponent,
    PaiementComptableValidateurEditAdminComponent,
    PaiementComptableTraitantCreateAdminComponent,
    PaiementComptableTraitantListAdminComponent,
    PaiementComptableTraitantViewAdminComponent,
    PaiementComptableTraitantEditAdminComponent,
    PaiementDemandeCreateAdminComponent,
    PaiementDemandeListAdminComponent,
    PaiementDemandeViewAdminComponent,
    PaiementDemandeEditAdminComponent,
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
      MatSnackBarModule,


  ],
  exports: [
  TypePaiementCreateAdminComponent,
  TypePaiementListAdminComponent,
  TypePaiementViewAdminComponent,
  TypePaiementEditAdminComponent,
  PaiementComptableValidateurCreateAdminComponent,
  PaiementComptableValidateurListAdminComponent,
  PaiementComptableValidateurViewAdminComponent,
  PaiementComptableValidateurEditAdminComponent,
  PaiementComptableTraitantCreateAdminComponent,
  PaiementComptableTraitantListAdminComponent,
  PaiementComptableTraitantViewAdminComponent,
  PaiementComptableTraitantEditAdminComponent,
  PaiementDemandeCreateAdminComponent,
  PaiementDemandeListAdminComponent,
  PaiementDemandeViewAdminComponent,
  PaiementDemandeEditAdminComponent,
  ],
})
export class PaiementAdminModule { }
