import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TypeDemandeDto} from 'src/app/shared/model/demande/TypeDemande.model';
import {TypeDemandeCriteria} from 'src/app/shared/criteria/demande/TypeDemandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeDemandeAdminService extends AbstractService<TypeDemandeDto, TypeDemandeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TypeDemandeDto {
        return new TypeDemandeDto();
    }

    public constrcutCriteria(): TypeDemandeCriteria {
        return new TypeDemandeCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/typeDemande/';
    }
}
