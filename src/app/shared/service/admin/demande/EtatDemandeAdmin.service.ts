import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {EtatDemandeDto} from 'src/app/shared/model/demande/EtatDemande.model';
import {EtatDemandeCriteria} from 'src/app/shared/criteria/demande/EtatDemandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatDemandeAdminService extends AbstractService<EtatDemandeDto, EtatDemandeCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): EtatDemandeDto {
        return new EtatDemandeDto();
    }

    public constrcutCriteria(): EtatDemandeCriteria {
        return new EtatDemandeCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/etatDemande/';
    }
}
