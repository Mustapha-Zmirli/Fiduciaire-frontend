import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeCriteria} from 'src/app/shared/criteria/demande/DemandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class DemandeAdminService extends AbstractService<DemandeDto, DemandeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): DemandeDto {
        return new DemandeDto();
    }

    public constrcutCriteria(): DemandeCriteria {
        return new DemandeCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/demande/';
    }
}
