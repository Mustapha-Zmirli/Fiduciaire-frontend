import {Component, OnInit} from '@angular/core';
import {PaiementDemandeAdminService} from 'src/app/shared/service/admin/paiement/PaiementDemandeAdmin.service';
import {PaiementDemandeDto} from 'src/app/shared/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/shared/criteria/paiement/PaiementDemandeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';


@Component({
  selector: 'app-paiement-demande-list-admin',
  templateUrl: './paiement-demande-list-admin.component.html'
})
export class PaiementDemandeListAdminComponent extends AbstractListController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeAdminService>  implements OnInit {

    override fileName = 'PaiementDemande';


    demandes: Array<DemandeDto>;
    typePaiements: Array<TypePaiementDto>;


    constructor( private paiementDemandeService: PaiementDemandeAdminService  , private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService) {
        super(paiementDemandeService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('PaiementDemande').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadDemande();
                this.loadTypePaiement();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'montant', header: 'Montant'},
            {field: 'datePaiement', header: 'Date paiement'},
            {field: 'demande?.libelle', header: 'Demande'},
            {field: 'typePaiement?.libelle', header: 'Type paiement'},
        ];
    }


    public async loadDemande(){
       this.demandeService.findAllOptimized().subscribe(demandes => this.demandes = demandes, error => console.log(error))
    }
    public async loadTypePaiement(){
       this.typePaiementService.findAllOptimized().subscribe(typePaiements => this.typePaiements = typePaiements, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Montant': e.montant ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
                'Demande': e.demande?.libelle ,
                'Type paiement': e.typePaiement?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
            'Date paiement Min': this.criteria.datePaiementFrom ? this.datePipe.transform(this.criteria.datePaiementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement Max': this.criteria.datePaiementTo ? this.datePipe.transform(this.criteria.datePaiementTo , this.dateFormat) : environment.emptyForExport ,
        //'Demande': this.criteria.demande?.libelle ? this.criteria.demande?.libelle : environment.emptyForExport ,
        //'Type paiement': this.criteria.typePaiement?.libelle ? this.criteria.typePaiement?.libelle : environment.emptyForExport ,
        }];
      }
}
