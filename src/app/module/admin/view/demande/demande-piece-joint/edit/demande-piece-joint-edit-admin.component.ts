import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {DemandePieceJointAdminService} from 'src/app/shared/service/admin/demande/DemandePieceJointAdmin.service';
import {DemandePieceJointDto} from 'src/app/shared/model/demande/DemandePieceJoint.model';
import {DemandePieceJointCriteria} from 'src/app/shared/criteria/demande/DemandePieceJointCriteria.model';


import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';

@Component({
  selector: 'app-demande-piece-joint-edit-admin',
  templateUrl: './demande-piece-joint-edit-admin.component.html'
})
export class DemandePieceJointEditAdminComponent extends AbstractEditController<DemandePieceJointDto, DemandePieceJointCriteria, DemandePieceJointAdminService>   implements OnInit {


    private _validDemandePieceJointCode = true;
    private _validDemandePieceJointLibelle = true;

    private _validDemandeCode = true;
    private _validDemandeLibelle = true;



    constructor( private demandePieceJointService: DemandePieceJointAdminService , private demandeService: DemandeAdminService) {
        super(demandePieceJointService);
    }

    ngOnInit(): void {
        this.demande = new DemandeDto();
        this.demandeService.findAll().subscribe((data) => this.demandes = data);
    }


    public override setValidation(value: boolean){
        this.validDemandePieceJointCode = value;
        this.validDemandePieceJointLibelle = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandePieceJointCode();
        this.validateDemandePieceJointLibelle();
    }
    public validateDemandePieceJointCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validDemandePieceJointCode = false;
        } else {
            this.validDemandePieceJointCode = true;
        }
    }
    public validateDemandePieceJointLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validDemandePieceJointLibelle = false;
        } else {
            this.validDemandePieceJointLibelle = true;
        }
    }



   public async openCreateDemande(demande: string) {
        const isPermistted = await this.roleService.isPermitted('Demande', 'edit');
        if (isPermistted) {
             this.demande = new DemandeDto();
             this.createDemandeDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get demande(): DemandeDto {
       return this.demandeService.item;
   }
  set demande(value: DemandeDto) {
        this.demandeService.item = value;
   }
   get demandes(): Array<DemandeDto> {
        return this.demandeService.items;
   }
   set demandes(value: Array<DemandeDto>) {
        this.demandeService.items = value;
   }
   get createDemandeDialog(): boolean {
       return this.demandeService.createDialog;
   }
  set createDemandeDialog(value: boolean) {
       this.demandeService.createDialog= value;
   }


    get validDemandePieceJointCode(): boolean {
        return this._validDemandePieceJointCode;
    }
    set validDemandePieceJointCode(value: boolean) {
        this._validDemandePieceJointCode = value;
    }
    get validDemandePieceJointLibelle(): boolean {
        return this._validDemandePieceJointLibelle;
    }
    set validDemandePieceJointLibelle(value: boolean) {
        this._validDemandePieceJointLibelle = value;
    }

    get validDemandeCode(): boolean {
        return this._validDemandeCode;
    }
    set validDemandeCode(value: boolean) {
        this._validDemandeCode = value;
    }
    get validDemandeLibelle(): boolean {
        return this._validDemandeLibelle;
    }
    set validDemandeLibelle(value: boolean) {
        this._validDemandeLibelle = value;
    }
}
