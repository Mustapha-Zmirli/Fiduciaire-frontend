import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PaiementComptableValidateurDto} from 'src/app/shared/model/paiement/PaiementComptableValidateur.model';
import {PaiementComptableValidateurCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableValidateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementComptableValidateurAdminService extends AbstractService<PaiementComptableValidateurDto, PaiementComptableValidateurCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementComptableValidateurDto {
        return new PaiementComptableValidateurDto();
    }

    public constrcutCriteria(): PaiementComptableValidateurCriteria {
        return new PaiementComptableValidateurCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/paiementComptableValidateur/';
    }
}
