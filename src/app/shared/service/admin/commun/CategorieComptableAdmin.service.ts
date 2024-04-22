import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {CategorieComptableDto} from 'src/app/shared/model/commun/CategorieComptable.model';
import {CategorieComptableCriteria} from 'src/app/shared/criteria/commun/CategorieComptableCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategorieComptableAdminService extends AbstractService<CategorieComptableDto, CategorieComptableCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): CategorieComptableDto {
        return new CategorieComptableDto();
    }

    public constrcutCriteria(): CategorieComptableCriteria {
        return new CategorieComptableCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/categorieComptable/';
    }
}
