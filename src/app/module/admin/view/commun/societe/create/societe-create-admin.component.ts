import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SocieteAdminService} from 'src/app/shared/service/admin/commun/SocieteAdmin.service';
import {SocieteDto} from 'src/app/shared/model/commun/Societe.model';
import {SocieteCriteria} from 'src/app/shared/criteria/commun/SocieteCriteria.model';
@Component({
  selector: 'app-societe-create-admin',
  templateUrl: './societe-create-admin.component.html'
})
export class SocieteCreateAdminComponent extends AbstractCreateController<SocieteDto, SocieteCriteria, SocieteAdminService>  implements OnInit {



   private _validSocieteIce = true;
   private _validSocieteRc = true;

    constructor( private societeService: SocieteAdminService ) {
        super(societeService);
    }

    ngOnInit(): void {
    }





    public override setValidation(value: boolean){
        this.validSocieteIce = value;
        this.validSocieteRc = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSocieteIce();
        this.validateSocieteRc();
    }

    public validateSocieteIce(){
        if (this.stringUtilService.isEmpty(this.item.ice)) {
        this.errorMessages.push('Ice non valide');
        this.validSocieteIce = false;
        } else {
            this.validSocieteIce = true;
        }
    }
    public validateSocieteRc(){
        if (this.stringUtilService.isEmpty(this.item.rc)) {
        this.errorMessages.push('Rc non valide');
        this.validSocieteRc = false;
        } else {
            this.validSocieteRc = true;
        }
    }






    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }

    set validSocieteIce(value: boolean) {
         this._validSocieteIce = value;
    }
    get validSocieteRc(): boolean {
        return this._validSocieteRc;
    }

    set validSocieteRc(value: boolean) {
         this._validSocieteRc = value;
    }



}
