import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CategorieComptableAdminService} from 'src/app/shared/service/admin/commun/CategorieComptableAdmin.service';
import {CategorieComptableDto} from 'src/app/shared/model/commun/CategorieComptable.model';
import {CategorieComptableCriteria} from 'src/app/shared/criteria/commun/CategorieComptableCriteria.model';
@Component({
  selector: 'app-categorie-comptable-create-admin',
  templateUrl: './categorie-comptable-create-admin.component.html'
})
export class CategorieComptableCreateAdminComponent extends AbstractCreateController<CategorieComptableDto, CategorieComptableCriteria, CategorieComptableAdminService>  implements OnInit {



   private _validCategorieComptableCode = true;
   private _validCategorieComptableLibelle = true;

    constructor( private categorieComptableService: CategorieComptableAdminService ) {
        super(categorieComptableService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validCategorieComptableCode = value;
        this.validCategorieComptableLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieComptableCode();
        this.validateCategorieComptableLibelle();
    }

    public validateCategorieComptableCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCategorieComptableCode = false;
        } else {
            this.validCategorieComptableCode = true;
        }
    }
    public validateCategorieComptableLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validCategorieComptableLibelle = false;
        } else {
            this.validCategorieComptableLibelle = true;
        }
    }






    get validCategorieComptableCode(): boolean {
        return this._validCategorieComptableCode;
    }

    set validCategorieComptableCode(value: boolean) {
         this._validCategorieComptableCode = value;
    }
    get validCategorieComptableLibelle(): boolean {
        return this._validCategorieComptableLibelle;
    }

    set validCategorieComptableLibelle(value: boolean) {
         this._validCategorieComptableLibelle = value;
    }



}
