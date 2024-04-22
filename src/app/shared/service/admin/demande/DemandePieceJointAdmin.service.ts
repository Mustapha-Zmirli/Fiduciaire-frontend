import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {DemandePieceJointDto} from 'src/app/shared/model/demande/DemandePieceJoint.model';
import {DemandePieceJointCriteria} from 'src/app/shared/criteria/demande/DemandePieceJointCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class DemandePieceJointAdminService extends AbstractService<DemandePieceJointDto, DemandePieceJointCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): DemandePieceJointDto {
        return new DemandePieceJointDto();
    }

    public constrcutCriteria(): DemandePieceJointCriteria {
        return new DemandePieceJointCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/demandePieceJoint/';
    }
}
