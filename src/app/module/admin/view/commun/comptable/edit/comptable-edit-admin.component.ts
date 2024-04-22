import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableCriteria} from 'src/app/shared/criteria/commun/ComptableCriteria.model';



@Component({
  selector: 'app-comptable-edit-admin',
  templateUrl: './comptable-edit-admin.component.html'
})
export class ComptableEditAdminComponent extends AbstractEditController<ComptableDto, ComptableCriteria, ComptableAdminService>   implements OnInit {


    private _validComptableCin = true;




    constructor( private comptableService: ComptableAdminService ) {
        super(comptableService);
    }

    ngOnInit(): void {
    }


    public override setValidation(value: boolean){
        this.validComptableCin = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateComptableCin();
    }
    public validateComptableCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validComptableCin = false;
        } else {
            this.validComptableCin = true;
        }
    }






    get validComptableCin(): boolean {
        return this._validComptableCin;
    }
    set validComptableCin(value: boolean) {
        this._validComptableCin = value;
    }

}
