import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PaiementDemandeAdminService} from 'src/app/shared/service/admin/paiement/PaiementDemandeAdmin.service';
import {PaiementDemandeDto} from 'src/app/shared/model/paiement/PaiementDemande.model';
import {PaiementDemandeCriteria} from 'src/app/shared/criteria/paiement/PaiementDemandeCriteria.model';
import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
@Component({
  selector: 'app-paiement-demande-create-admin',
  templateUrl: './paiement-demande-create-admin.component.html'
})
export class PaiementDemandeCreateAdminComponent extends AbstractCreateController<PaiementDemandeDto, PaiementDemandeCriteria, PaiementDemandeAdminService>  implements OnInit {



   private _validPaiementDemandeCode = true;
    private _validDemandeCode = true;
    private _validDemandeLibelle = true;
    private _validTypePaiementCode = true;
    private _validTypePaiementLibelle = true;

    constructor( private paiementDemandeService: PaiementDemandeAdminService , private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService) {
        super(paiementDemandeService);
    }

    ngOnInit(): void {
        this.demande = new DemandeDto();
        this.demandeService.findAll().subscribe((data) => this.demandes = data);
        this.typePaiement = new TypePaiementDto();
        this.typePaiementService.findAll().subscribe((data) => this.typePaiements = data);
    }





    public override setValidation(value: boolean){
        this.validPaiementDemandeCode = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementDemandeCode();
    }

    public validatePaiementDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPaiementDemandeCode = false;
        } else {
            this.validPaiementDemandeCode = true;
        }
    }


    public async openCreateTypePaiement(typePaiement: string) {
    const isPermistted = await this.roleService.isPermitted('TypePaiement', 'add');
    if(isPermistted) {
         this.typePaiement = new TypePaiementDto();
         this.createTypePaiementDialog = true;
    }else{
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



    get validPaiementDemandeCode(): boolean {
        return this._validPaiementDemandeCode;
    }

    set validPaiementDemandeCode(value: boolean) {
         this._validPaiementDemandeCode = value;
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
