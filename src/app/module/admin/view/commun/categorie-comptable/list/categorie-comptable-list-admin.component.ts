import {Component, OnInit} from '@angular/core';
import {CategorieComptableAdminService} from 'src/app/shared/service/admin/commun/CategorieComptableAdmin.service';
import {CategorieComptableDto} from 'src/app/shared/model/commun/CategorieComptable.model';
import {CategorieComptableCriteria} from 'src/app/shared/criteria/commun/CategorieComptableCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-categorie-comptable-list-admin',
  templateUrl: './categorie-comptable-list-admin.component.html'
})
export class CategorieComptableListAdminComponent extends AbstractListController<CategorieComptableDto, CategorieComptableCriteria, CategorieComptableAdminService>  implements OnInit {

    override fileName = 'CategorieComptable';




    constructor( private categorieComptableService: CategorieComptableAdminService  ) {
        super(categorieComptableService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('CategorieComptable').subscribe(() => {
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
