import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DemandePieceJointAdminService} from 'src/app/shared/service/admin/demande/DemandePieceJointAdmin.service';
import {DemandePieceJointDto} from 'src/app/shared/model/demande/DemandePieceJoint.model';
import {DemandePieceJointCriteria} from 'src/app/shared/criteria/demande/DemandePieceJointCriteria.model';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
@Component({
  selector: 'app-demande-piece-joint-view-admin',
  templateUrl: './demande-piece-joint-view-admin.component.html'
})
export class DemandePieceJointViewAdminComponent extends AbstractViewController<DemandePieceJointDto, DemandePieceJointCriteria, DemandePieceJointAdminService> implements OnInit {


    constructor(private demandePieceJointService: DemandePieceJointAdminService, private demandeService: DemandeAdminService){
        super(demandePieceJointService);
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


}
