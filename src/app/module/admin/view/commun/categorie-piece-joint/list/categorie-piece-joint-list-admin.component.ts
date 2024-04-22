import {Component, OnInit} from '@angular/core';
import {CategoriePieceJointAdminService} from 'src/app/shared/service/admin/commun/CategoriePieceJointAdmin.service';
import {CategoriePieceJointDto} from 'src/app/shared/model/commun/CategoriePieceJoint.model';
import {CategoriePieceJointCriteria} from 'src/app/shared/criteria/commun/CategoriePieceJointCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-categorie-piece-joint-list-admin',
  templateUrl: './categorie-piece-joint-list-admin.component.html'
})
export class CategoriePieceJointListAdminComponent extends AbstractListController<CategoriePieceJointDto, CategoriePieceJointCriteria, CategoriePieceJointAdminService>  implements OnInit {

    override fileName = 'CategoriePieceJoint';




    constructor( private categoriePieceJointService: CategoriePieceJointAdminService  ) {
        super(categoriePieceJointService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('CategoriePieceJoint').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
