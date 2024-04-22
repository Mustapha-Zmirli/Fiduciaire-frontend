import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementCriteria} from 'src/app/shared/criteria/paiement/TypePaiementCriteria.model';
@Component({
  selector: 'app-type-paiement-create-admin',
  templateUrl: './type-paiement-create-admin.component.html'
})
export class TypePaiementCreateAdminComponent extends AbstractCreateController<TypePaiementDto, TypePaiementCriteria, TypePaiementAdminService>  implements OnInit {



   private _validTypePaiementCode = true;
   private _validTypePaiementLibelle = true;

    constructor( private typePaiementService: TypePaiementAdminService ) {
        super(typePaiementService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validTypePaiementCode = value;
        this.validTypePaiementLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypePaiementCode();
        this.validateTypePaiementLibelle();
    }

    public validateTypePaiementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypePaiementCode = false;
        } else {
            this.validTypePaiementCode = true;
        }
    }
    public validateTypePaiementLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypePaiementLibelle = false;
        } else {
            this.validTypePaiementLibelle = true;
        }
    }






    get validTypePaiementCode(): boolean {
        return this._validTypePaiementCode;
    }

    set validTypePaiementCode(value: boolean) {
         this._validTypePaiementCode = value;
    }
    get validTypePaiementLibelle(): boolean {
        return this._validTypePaiementLibelle;
    }

    set validTypePaiementLibelle(value: boolean) {
         this._validTypePaiementLibelle = value;
    }



}
