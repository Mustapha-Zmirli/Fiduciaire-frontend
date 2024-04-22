import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementCriteria} from 'src/app/shared/criteria/paiement/TypePaiementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypePaiementAdminService extends AbstractService<TypePaiementDto, TypePaiementCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypePaiementDto {
        return new TypePaiementDto();
    }

    public constrcutCriteria(): TypePaiementCriteria {
        return new TypePaiementCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/typePaiement/';
    }
}
