import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PaiementComptableValidateurAdminService} from 'src/app/shared/service/admin/paiement/PaiementComptableValidateurAdmin.service';
import {PaiementComptableValidateurDto} from 'src/app/shared/model/paiement/PaiementComptableValidateur.model';
import {PaiementComptableValidateurCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableValidateurCriteria.model';
import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {TypePaiementDto} from 'src/app/shared/model/paiement/TypePaiement.model';
import {TypePaiementAdminService} from 'src/app/shared/service/admin/paiement/TypePaiementAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';
@Component({
  selector: 'app-paiement-comptable-validateur-create-admin',
  templateUrl: './paiement-comptable-validateur-create-admin.component.html'
})
export class PaiementComptableValidateurCreateAdminComponent extends AbstractCreateController<PaiementComptableValidateurDto, PaiementComptableValidateurCriteria, PaiementComptableValidateurAdminService>  implements OnInit {



   private _validPaiementComptableValidateurCode = true;
    private _validDemandeCode = true;
    private _validDemandeLibelle = true;
    private _validComptableValidateurCin = true;
    private _validTypePaiementCode = true;
    private _validTypePaiementLibelle = true;

    constructor( private paiementComptableValidateurService: PaiementComptableValidateurAdminService , private demandeService: DemandeAdminService, private typePaiementService: TypePaiementAdminService, private comptableService: ComptableAdminService) {
        super(paiementComptableValidateurService);
    }

    ngOnInit(): void {
        this.demande = new DemandeDto();
        this.demandeService.findAll().subscribe((data) => this.demandes = data);
        this.comptableValidateur = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptableValidateurs = data);
        this.typePaiement = new TypePaiementDto();
        this.typePaiementService.findAll().subscribe((data) => this.typePaiements = data);
    }





    public override setValidation(value: boolean){
        this.validPaiementComptableValidateurCode = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaiementComptableValidateurCode();
    }

    public validatePaiementComptableValidateurCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPaiementComptableValidateurCode = false;
        } else {
            this.validPaiementComptableValidateurCode = true;
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
    get comptableValidateur(): ComptableDto {
        return this.comptableService.item;
    }
    set comptableValidateur(value: ComptableDto) {
        this.comptableService.item = value;
    }
    get comptableValidateurs(): Array<ComptableDto> {
        return this.comptableService.items;
    }
    set comptableValidateurs(value: Array<ComptableDto>) {
        this.comptableService.items = value;
    }
    get createComptableValidateurDialog(): boolean {
       return this.comptableService.createDialog;
    }
    set createComptableValidateurDialog(value: boolean) {
        this.comptableService.createDialog= value;
    }



    get validPaiementComptableValidateurCode(): boolean {
        return this._validPaiementComptableValidateurCode;
    }

    set validPaiementComptableValidateurCode(value: boolean) {
         this._validPaiementComptableValidateurCode = value;
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
    get validComptableValidateurCin(): boolean {
        return this._validComptableValidateurCin;
    }
    set validComptableValidateurCin(value: boolean) {
        this._validComptableValidateurCin = value;
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
