import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatDemandeAdminService} from 'src/app/shared/service/admin/demande/EtatDemandeAdmin.service';
import {EtatDemandeDto} from 'src/app/shared/model/demande/EtatDemande.model';
import {EtatDemandeCriteria} from 'src/app/shared/criteria/demande/EtatDemandeCriteria.model';

@Component({
  selector: 'app-etat-demande-view-admin',
  templateUrl: './etat-demande-view-admin.component.html'
})
export class EtatDemandeViewAdminComponent extends AbstractViewController<EtatDemandeDto, EtatDemandeCriteria, EtatDemandeAdminService> implements OnInit {


    constructor(private etatDemandeService: EtatDemandeAdminService){
        super(etatDemandeService);
    }

    ngOnInit(): void {
    }




}
