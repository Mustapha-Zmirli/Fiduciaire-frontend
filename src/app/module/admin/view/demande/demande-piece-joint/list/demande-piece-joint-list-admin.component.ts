import {Component, OnInit} from '@angular/core';
import {DemandePieceJointAdminService} from 'src/app/shared/service/admin/demande/DemandePieceJointAdmin.service';
import {DemandePieceJointDto} from 'src/app/shared/model/demande/DemandePieceJoint.model';
import {DemandePieceJointCriteria} from 'src/app/shared/criteria/demande/DemandePieceJointCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';


@Component({
  selector: 'app-demande-piece-joint-list-admin',
  templateUrl: './demande-piece-joint-list-admin.component.html'
})
export class DemandePieceJointListAdminComponent extends AbstractListController<DemandePieceJointDto, DemandePieceJointCriteria, DemandePieceJointAdminService>  implements OnInit {

    override fileName = 'DemandePieceJoint';


    demandes: Array<DemandeDto>;


    constructor( private demandePieceJointService: DemandePieceJointAdminService  , private demandeService: DemandeAdminService) {
        super(demandePieceJointService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('DemandePieceJoint').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadDemande();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'demande?.libelle', header: 'Demande'},
            {field: 'path', header: 'Path'},
        ];
    }


    public async loadDemande(){
       this.demandeService.findAllOptimized().subscribe(demandes => this.demandes = demandes, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Demande': e.demande?.libelle ,
                 'Path': e.path ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Demande': this.criteria.demande?.libelle ? this.criteria.demande?.libelle : environment.emptyForExport ,
            'Path': this.criteria.path ? this.criteria.path : environment.emptyForExport ,
        }];
      }
}
