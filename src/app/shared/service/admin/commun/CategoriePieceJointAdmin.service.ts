import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CategoriePieceJointDto} from 'src/app/shared/model/commun/CategoriePieceJoint.model';
import {CategoriePieceJointCriteria} from 'src/app/shared/criteria/commun/CategoriePieceJointCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategoriePieceJointAdminService extends AbstractService<CategoriePieceJointDto, CategoriePieceJointCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CategoriePieceJointDto {
        return new CategoriePieceJointDto();
    }

    public constrcutCriteria(): CategoriePieceJointCriteria {
        return new CategoriePieceJointCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/categoriePieceJoint/';
    }
}
