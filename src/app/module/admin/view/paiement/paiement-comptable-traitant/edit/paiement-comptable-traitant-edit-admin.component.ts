import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PaiementComptableTraitantAdminService} from 'src/app/shared/service/admin/paiement/PaiementComptableTraitantAdmin.service';
import {PaiementComptableTraitantDto} from 'src/app/shared/model/paiement/PaiementComptableTraitant.model';
import {PaiementComptableTraitantCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableTraitantCriteria.model';


import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';

@Component({
  selector: 'app-paiement-comptable-traitant-edit-admin',
  templateUrl: './paiement-comptable-traitant-edit-admin.component.html'
})
export class PaiementComptableTraitantEditAdminComponent extends AbstractEditController<PaiementComptableTraitantDto, PaiementComptableTraitantCriteria, PaiementComptableTraitantAdminService>   implements OnInit {


    private _validPaiementComptableTraitantCode = true;

    private _validDemandeCode = true;
    private _validDemandeLibelle = true;
    private _validComptableTraitantCin = true;
    private _validTypePaiementCode = true;
    private _validTypePaiementLibelle = true;



    constructor( private paiementComptableTraitantService: PaiementComptableTraitantAdminService , private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService, private comptableService: ComptableAdminService) {
        super(paiementComptableTraitantService);
    }

    ngOnInit(): void {
        this.demande = new DemandeDto();
        this.demandeService.findAll().subscribe((data) => this.demandes = data);
        this.comptableTraitant = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptableTraitants = data);
        this.typePaiement = new TypePaiementDto();
        this.typePaiementService.findAll().subscribe((data) => this.typePaiements = data);
    }
    public override prepareEdit() {
        this.item.datePaiement = this.paiementComptableTraitantService.format(this.item.datePaiement);
    }



    public override setValidation(value: boolean){
        this.validPaiementComptableTraitantCode = value;
        }
    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementComptableTraitantCode();
    }
    public validatePaiementComptableTraitantCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPaiementComptableTraitantCode = false;
        } else {
            this.validPaiementComptableTraitantCode = true;
        }
    }



   public async openCreateTypePaiement(typePaiement: string) {
        const isPermistted = await this.roleService.isPermitted('TypePaiement', 'edit');
        if (isPermistted) {
             this.typePaiement = new TypePaiementDto();
             this.createTypePaiementDialog = true;
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
   get typePaiement(): TypePaiementDto {
       return this.typePaiementService.item;
   }
  set typePaiement(value: TypePaiementDto) {
        this.typePaiementService.item = value;
   }
   get typePaiements(): Array<TypePaiementDto> {
        return this.typePaiementService.items;
   }
   set typePaiements(value: Array<TypePaiementDto>) {
        this.typePaiementService.items = value;
   }
   get createTypePaiementDialog(): boolean {
       return this.typePaiementService.createDialog;
   }
  set createTypePaiementDialog(value: boolean) {
       this.typePaiementService.createDialog= value;
   }
   get comptableTraitant(): ComptableDto {
       return this.comptableService.item;
   }
  set comptableTraitant(value: ComptableDto) {
        this.comptableService.item = value;
   }
   get comptableTraitants(): Array<ComptableDto> {
        return this.comptableService.items;
   }
   set comptableTraitants(value: Array<ComptableDto>) {
        this.comptableService.items = value;
   }
   get createComptableTraitantDialog(): boolean {
       return this.comptableService.createDialog;
   }
  set createComptableTraitantDialog(value: boolean) {
       this.comptableService.createDialog= value;
   }


    get validPaiementComptableTraitantCode(): boolean {
        return this._validPaiementComptableTraitantCode;
    }
    set validPaiementComptableTraitantCode(value: boolean) {
        this._validPaiementComptableTraitantCode = value;
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
    get validComptableTraitantCin(): boolean {
        return this._validComptableTraitantCin;
    }
    set validComptableTraitantCin(value: boolean) {
        this._validComptableTraitantCin = value;
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
