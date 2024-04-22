import {Component, OnInit} from '@angular/core';
import {EtatDemandeAdminService} from 'src/app/shared/service/admin/demande/EtatDemandeAdmin.service';
import {EtatDemandeDto} from 'src/app/shared/model/demande/EtatDemande.model';
import {EtatDemandeCriteria} from 'src/app/shared/criteria/demande/EtatDemandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-demande-list-admin',
  templateUrl: './etat-demande-list-admin.component.html'
})
export class EtatDemandeListAdminComponent extends AbstractListController<EtatDemandeDto, EtatDemandeCriteria, EtatDemandeAdminService>  implements OnInit {

    override fileName = 'EtatDemande';




    constructor( private etatDemandeService: EtatDemandeAdminService  ) {
        super(etatDemandeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('EtatDemande').subscribe(() => {
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
