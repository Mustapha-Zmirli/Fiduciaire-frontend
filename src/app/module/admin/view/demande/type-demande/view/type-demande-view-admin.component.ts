import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeDemandeAdminService} from 'src/app/shared/service/admin/demande/TypeDemandeAdmin.service';
import {TypeDemandeDto} from 'src/app/shared/model/demande/TypeDemande.model';
import {TypeDemandeCriteria} from 'src/app/shared/criteria/demande/TypeDemandeCriteria.model';

@Component({
  selector: 'app-type-demande-view-admin',
  templateUrl: './type-demande-view-admin.component.html'
})
export class TypeDemandeViewAdminComponent extends AbstractViewController<TypeDemandeDto, TypeDemandeCriteria, TypeDemandeAdminService> implements OnInit {


    constructor(private typeDemandeService: TypeDemandeAdminService){
        super(typeDemandeService);
    }

    ngOnInit(): void {
    }




}
