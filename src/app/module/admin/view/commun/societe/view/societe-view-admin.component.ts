import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SocieteAdminService} from 'src/app/shared/service/admin/commun/SocieteAdmin.service';
import {SocieteDto} from 'src/app/shared/model/commun/Societe.model';
import {SocieteCriteria} from 'src/app/shared/criteria/commun/SocieteCriteria.model';

@Component({
  selector: 'app-societe-view-admin',
  templateUrl: './societe-view-admin.component.html'
})
export class SocieteViewAdminComponent extends AbstractViewController<SocieteDto, SocieteCriteria, SocieteAdminService> implements OnInit {


    constructor(private societeService: SocieteAdminService){
        super(societeService);
    }

    ngOnInit(): void {
    }




}
