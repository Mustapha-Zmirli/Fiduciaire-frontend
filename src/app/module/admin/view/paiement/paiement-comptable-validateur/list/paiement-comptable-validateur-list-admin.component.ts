import {Component, OnInit} from '@angular/core';
import {PaiementComptableValidateurAdminService} from 'src/app/shared/service/admin/paiement/PaiementComptableValidateurAdmin.service';
import {PaiementComptableValidateurDto} from 'src/app/shared/model/paiement/PaiementComptableValidateur.model';
import {PaiementComptableValidateurCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableValidateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';


@Component({
  selector: 'app-paiement-comptable-validateur-list-admin',
  templateUrl: './paiement-comptable-validateur-list-admin.component.html'
})
export class PaiementComptableValidateurListAdminComponent extends AbstractListController<PaiementComptableValidateurDto, PaiementComptableValidateurCriteria, PaiementComptableValidateurAdminService>  implements OnInit {

    override fileName = 'PaiementComptableValidateur';


    demandes: Array<DemandeDto>;
    comptableValidateurs: Array<ComptableDto>;
    typePaiements: Array<TypePaiementDto>;


    constructor( private paiementComptableValidateurService: PaiementComptableValidateurAdminService  , private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService, private comptableService: ComptableAdminService) {
        super(paiementComptableValidateurService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('PaiementComptableValidateur').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadDemande();
                this.loadComptableValidateur();
                this.loadTypePaiement();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'demande?.libelle', header: 'Demande'},
            {field: 'montant', header: 'Montant'},
            {field: 'comptableValidateur?.cin', header: 'Comptable validateur'},
            {field: 'typePaiement?.libelle', header: 'Type paiement'},
            {field: 'datePaiement', header: 'Date paiement'},
        ];
    }


    public async loadDemande(){
       this.demandeService.findAllOptimized().subscribe(demandes => this.demandes = demandes, error => console.log(error))
    }
    public async loadComptableValidateur(){
       this.comptableService.findAllOptimized().subscribe(comptableValidateurs => this.comptableValidateurs = comptableValidateurs, error => console.log(error))
    }
    public async loadTypePaiement(){
       this.typePaiementService.findAllOptimized().subscribe(typePaiements => this.typePaiements = typePaiements, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Demande': e.demande?.libelle ,
                 'Montant': e.montant ,
                'Comptable validateur': e.comptableValidateur?.cin ,
                'Type paiement': e.typePaiement?.libelle ,
                'Date paiement': this.datePipe.transform(e.datePaiement , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Demande': this.criteria.demande?.libelle ? this.criteria.demande?.libelle : environment.emptyForExport ,
            'Montant Min': this.criteria.montantMin ? this.criteria.montantMin : environment.emptyForExport ,
            'Montant Max': this.criteria.montantMax ? this.criteria.montantMax : environment.emptyForExport ,
        //'Comptable validateur': this.criteria.comptableValidateur?.cin ? this.criteria.comptableValidateur?.cin : environment.emptyForExport ,
        //'Type paiement': this.criteria.typePaiement?.libelle ? this.criteria.typePaiement?.libelle : environment.emptyForExport ,
            'Date paiement Min': this.criteria.datePaiementFrom ? this.datePipe.transform(this.criteria.datePaiementFrom , this.dateFormat) : environment.emptyForExport ,
            'Date paiement Max': this.criteria.datePaiementTo ? this.datePipe.transform(this.criteria.datePaiementTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
