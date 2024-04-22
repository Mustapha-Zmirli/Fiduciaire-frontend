import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategoriePieceJointAdminService} from 'src/app/shared/service/admin/commun/CategoriePieceJointAdmin.service';
import {CategoriePieceJointDto} from 'src/app/shared/model/commun/CategoriePieceJoint.model';
import {CategoriePieceJointCriteria} from 'src/app/shared/criteria/commun/CategoriePieceJointCriteria.model';

@Component({
  selector: 'app-categorie-piece-joint-view-admin',
  templateUrl: './categorie-piece-joint-view-admin.component.html'
})
export class CategoriePieceJointViewAdminComponent extends AbstractViewController<CategoriePieceJointDto, CategoriePieceJointCriteria, CategoriePieceJointAdminService> implements OnInit {


    constructor(private categoriePieceJointService: CategoriePieceJointAdminService){
        super(categoriePieceJointService);
    }

    ngOnInit(): void {
    }




}
