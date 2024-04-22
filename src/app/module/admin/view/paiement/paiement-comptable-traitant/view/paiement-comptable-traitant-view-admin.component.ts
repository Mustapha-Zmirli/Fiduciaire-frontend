import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PaiementComptableTraitantAdminService} from 'src/app/shared/service/admin/paiement/PaiementComptableTraitantAdmin.service';
import {PaiementComptableTraitantDto} from 'src/app/shared/model/paiement/PaiementComptableTraitant.model';
import {PaiementComptableTraitantCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableTraitantCriteria.model';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';
@Component({
  selector: 'app-paiement-comptable-traitant-view-admin',
  templateUrl: './paiement-comptable-traitant-view-admin.component.html'
})
export class PaiementComptableTraitantViewAdminComponent extends AbstractViewController<PaiementComptableTraitantDto, PaiementComptableTraitantCriteria, PaiementComptableTraitantAdminService> implements OnInit {


    constructor(private paiementComptableTraitantService: PaiementComptableTraitantAdminService, private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService, private comptableService: ComptableAdminService){
        super(paiementComptableTraitantService);
    }

    ngOnInit(): void {
    }


    get demande(): DemandeDto {
       return this.demandeService.item;
    }
    set demande(value: DemandeDto) {
        this.demandeService.item = value;
    }
    get demandes(): Array<DemandeDto> {
       return this.demandeService.items;
    }
    set demandes(value: Array<DemandeDto>) {
        this.demandeService.items = value;
    }
    get typePaiement(): TypePaiementDto {
       return this.typePaiementService.item;
    }
    set typePaiement(value: TypePaiementDto) {
        this.typePaiementService.item = value;
    }
    get typePaiements(): Array<TypePaiementDto> {
       return this.typePaiementService.items;
    }
    set typePaiements(value: Array<TypePaiementDto>) {
        this.typePaiementService.items = value;
    }
    get comptableTraitant(): ComptableDto {
       return this.comptableService.item;
    }
    set comptableTraitant(value: ComptableDto) {
        this.comptableService.item = value;
    }
    get comptableTraitants(): Array<ComptableDto> {
       return this.comptableService.items;
    }
    set comptableTraitants(value: Array<ComptableDto>) {
        this.comptableService.items = value;
    }


}
