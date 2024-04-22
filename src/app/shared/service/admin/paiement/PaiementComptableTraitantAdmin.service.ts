import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PaiementComptableTraitantDto} from 'src/app/shared/model/paiement/PaiementComptableTraitant.model';
import {PaiementComptableTraitantCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableTraitantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementComptableTraitantAdminService extends AbstractService<PaiementComptableTraitantDto, PaiementComptableTraitantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementComptableTraitantDto {
        return new PaiementComptableTraitantDto();
    }

    public constrcutCriteria(): PaiementComptableTraitantCriteria {
        return new PaiementComptableTraitantCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/paiementComptableTraitant/';
    }
}
