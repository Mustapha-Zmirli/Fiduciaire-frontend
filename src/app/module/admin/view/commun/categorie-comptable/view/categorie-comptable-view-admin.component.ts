import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieComptableAdminService} from 'src/app/shared/service/admin/commun/CategorieComptableAdmin.service';
import {CategorieComptableDto} from 'src/app/shared/model/commun/CategorieComptable.model';
import {CategorieComptableCriteria} from 'src/app/shared/criteria/commun/CategorieComptableCriteria.model';

@Component({
  selector: 'app-categorie-comptable-view-admin',
  templateUrl: './categorie-comptable-view-admin.component.html'
})
export class CategorieComptableViewAdminComponent extends AbstractViewController<CategorieComptableDto, CategorieComptableCriteria, CategorieComptableAdminService> implements OnInit {


    constructor(private categorieComptableService: CategorieComptableAdminService){
        super(categorieComptableService);
    }

    ngOnInit(): void {
    }




}
