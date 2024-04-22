import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatDemandeAdminService} from 'src/app/shared/service/admin/demande/EtatDemandeAdmin.service';
import {EtatDemandeDto} from 'src/app/shared/model/demande/EtatDemande.model';
import {EtatDemandeCriteria} from 'src/app/shared/criteria/demande/EtatDemandeCriteria.model';
@Component({
  selector: 'app-etat-demande-create-admin',
  templateUrl: './etat-demande-create-admin.component.html'
})
export class EtatDemandeCreateAdminComponent extends AbstractCreateController<EtatDemandeDto, EtatDemandeCriteria, EtatDemandeAdminService>  implements OnInit {



   private _validEtatDemandeCode = true;
   private _validEtatDemandeLibelle = true;

    constructor( private etatDemandeService: EtatDemandeAdminService ) {
        super(etatDemandeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validEtatDemandeCode = value;
        this.validEtatDemandeLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatDemandeCode();
        this.validateEtatDemandeLibelle();
    }

    public validateEtatDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validEtatDemandeCode = false;
        } else {
            this.validEtatDemandeCode = true;
        }
    }
    public validateEtatDemandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEtatDemandeLibelle = false;
        } else {
            this.validEtatDemandeLibelle = true;
        }
    }






    get validEtatDemandeCode(): boolean {
        return this._validEtatDemandeCode;
    }

    set validEtatDemandeCode(value: boolean) {
         this._validEtatDemandeCode = value;
    }
    get validEtatDemandeLibelle(): boolean {
        return this._validEtatDemandeLibelle;
    }

    set validEtatDemandeLibelle(value: boolean) {
         this._validEtatDemandeLibelle = value;
    }



}
