import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeDemandeAdminService} from 'src/app/shared/service/admin/demande/TypeDemandeAdmin.service';
import {TypeDemandeDto} from 'src/app/shared/model/demande/TypeDemande.model';
import {TypeDemandeCriteria} from 'src/app/shared/criteria/demande/TypeDemandeCriteria.model';
@Component({
  selector: 'app-type-demande-create-admin',
  templateUrl: './type-demande-create-admin.component.html'
})
export class TypeDemandeCreateAdminComponent extends AbstractCreateController<TypeDemandeDto, TypeDemandeCriteria, TypeDemandeAdminService>  implements OnInit {



   private _validTypeDemandeCode = true;
   private _validTypeDemandeLibelle = true;

    constructor( private typeDemandeService: TypeDemandeAdminService ) {
        super(typeDemandeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validTypeDemandeCode = value;
        this.validTypeDemandeLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeDemandeCode();
        this.validateTypeDemandeLibelle();
    }

    public validateTypeDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeDemandeCode = false;
        } else {
            this.validTypeDemandeCode = true;
        }
    }
    public validateTypeDemandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeDemandeLibelle = false;
        } else {
            this.validTypeDemandeLibelle = true;
        }
    }






    get validTypeDemandeCode(): boolean {
        return this._validTypeDemandeCode;
    }

    set validTypeDemandeCode(value: boolean) {
         this._validTypeDemandeCode = value;
    }
    get validTypeDemandeLibelle(): boolean {
        return this._validTypeDemandeLibelle;
    }

    set validTypeDemandeLibelle(value: boolean) {
         this._validTypeDemandeLibelle = value;
    }



}
