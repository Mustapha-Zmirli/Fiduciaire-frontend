import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PaiementDemandeAdminService} from 'src/app/shared/service/admin/paiement/PaiementDemandeAdmin.service';
import {PaiementDemandeDto} from 'src/app/shared/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/shared/criteria/paiement/PaiementDemandeCriteria.model';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
@Component({
  selector: 'app-paiement-demande-view-admin',
  templateUrl: './paiement-demande-view-admin.component.html'
})
export class PaiementDemandeViewAdminComponent extends AbstractViewController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeAdminService> implements OnInit {


    constructor(private paiementDemandeService: PaiementDemandeAdminService, private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService){
        super(paiementDemandeService);
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


}
