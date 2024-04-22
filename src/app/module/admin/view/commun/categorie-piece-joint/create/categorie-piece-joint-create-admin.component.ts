import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CategoriePieceJointAdminService} from 'src/app/shared/service/admin/commun/CategoriePieceJointAdmin.service';
import {CategoriePieceJointDto} from 'src/app/shared/model/commun/CategoriePieceJoint.model';
import {CategoriePieceJointCriteria} from 'src/app/shared/criteria/commun/CategoriePieceJointCriteria.model';
@Component({
  selector: 'app-categorie-piece-joint-create-admin',
  templateUrl: './categorie-piece-joint-create-admin.component.html'
})
export class CategoriePieceJointCreateAdminComponent extends AbstractCreateController<CategoriePieceJointDto, CategoriePieceJointCriteria, CategoriePieceJointAdminService>  implements OnInit {



   private _validCategoriePieceJointCode = true;
   private _validCategoriePieceJointLibelle = true;

    constructor( private categoriePieceJointService: CategoriePieceJointAdminService ) {
        super(categoriePieceJointService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validCategoriePieceJointCode = value;
        this.validCategoriePieceJointLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategoriePieceJointCode();
        this.validateCategoriePieceJointLibelle();
    }

    public validateCategoriePieceJointCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCategoriePieceJointCode = false;
        } else {
            this.validCategoriePieceJointCode = true;
        }
    }
    public validateCategoriePieceJointLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validCategoriePieceJointLibelle = false;
        } else {
            this.validCategoriePieceJointLibelle = true;
        }
    }






    get validCategoriePieceJointCode(): boolean {
        return this._validCategoriePieceJointCode;
    }

    set validCategoriePieceJointCode(value: boolean) {
         this._validCategoriePieceJointCode = value;
    }
    get validCategoriePieceJointLibelle(): boolean {
        return this._validCategoriePieceJointLibelle;
    }

    set validCategoriePieceJointLibelle(value: boolean) {
         this._validCategoriePieceJointLibelle = value;
    }



}
