import {Component, OnInit} from '@angular/core';
import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableCriteria} from 'src/app/shared/criteria/commun/ComptableCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-comptable-list-admin',
  templateUrl: './comptable-list-admin.component.html'
})
export class ComptableListAdminComponent extends AbstractListController<ComptableDto, ComptableCriteria, ComptableAdminService>  implements OnInit {

    override fileName = 'Comptable';




    constructor( private comptableService: ComptableAdminService  ) {
        super(comptableService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Comptable').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'cin', header: 'Cin'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'nom', header: 'Nom'},
            {field: 'email', header: 'Email'},
            {field: 'categorieComptable', header: 'Categorie comptable'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Cin': e.cin ,
                 'Prenom': e.prenom ,
                 'Nom': e.nom ,
                 'Email': e.email ,
                 'Categorie comptable': e.categorieComptable ,
            }
        });

        this.criteriaData = [{
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Categorie comptable': this.criteria.categorieComptable ? this.criteria.categorieComptable : environment.emptyForExport ,
        }];
      }
}
