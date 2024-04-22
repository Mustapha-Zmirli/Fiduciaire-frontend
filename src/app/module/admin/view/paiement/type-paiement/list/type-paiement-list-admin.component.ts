import {Component, OnInit} from '@angular/core';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementCriteria} from 'src/app/shared/criteria/paiement/TypePaiementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-paiement-list-admin',
  templateUrl: './type-paiement-list-admin.component.html'
})
export class TypePaiementListAdminComponent extends AbstractListController<TypePaiementDto, TypePaiementCriteria, TypePaiementAdminService>  implements OnInit {

    override fileName = 'TypePaiement';




    constructor( private typePaiementService: TypePaiementAdminService  ) {
        super(typePaiementService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypePaiement').subscribe(() => {
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
