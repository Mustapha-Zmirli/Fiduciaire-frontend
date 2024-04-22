import {Component, OnInit} from '@angular/core';
import {TypeDemandeAdminService} from 'src/app/shared/service/admin/demande/TypeDemandeAdmin.service';
import {TypeDemandeDto} from 'src/app/shared/model/demande/TypeDemande.model';
import {TypeDemandeCriteria} from 'src/app/shared/criteria/demande/TypeDemandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-demande-list-admin',
  templateUrl: './type-demande-list-admin.component.html'
})
export class TypeDemandeListAdminComponent extends AbstractListController<TypeDemandeDto, TypeDemandeCriteria, TypeDemandeAdminService>  implements OnInit {

    override fileName = 'TypeDemande';




    constructor( private typeDemandeService: TypeDemandeAdminService  ) {
        super(typeDemandeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('TypeDemande').subscribe(() => {
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
            {field: 'honnoraireComptableTraitant', header: 'Honnoraire comptable traitant'},
            {field: 'honnoraireComptableValidateur', header: 'Honnoraire comptable validateur'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Honnoraire comptable traitant': e.honnoraireComptableTraitant ,
                 'Honnoraire comptable validateur': e.honnoraireComptableValidateur ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Honnoraire comptable traitant Min': this.criteria.honnoraireComptableTraitantMin ? this.criteria.honnoraireComptableTraitantMin : environment.emptyForExport ,
            'Honnoraire comptable traitant Max': this.criteria.honnoraireComptableTraitantMax ? this.criteria.honnoraireComptableTraitantMax : environment.emptyForExport ,
            'Honnoraire comptable validateur Min': this.criteria.honnoraireComptableValidateurMin ? this.criteria.honnoraireComptableValidateurMin : environment.emptyForExport ,
            'Honnoraire comptable validateur Max': this.criteria.honnoraireComptableValidateurMax ? this.criteria.honnoraireComptableValidateurMax : environment.emptyForExport ,
        }];
      }
}
