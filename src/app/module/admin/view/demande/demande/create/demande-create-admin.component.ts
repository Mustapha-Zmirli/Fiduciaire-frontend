import {Component, OnInit} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DemandeAdminService} from 'src/app/shared/service/admin/demande/DemandeAdmin.service';
import {DemandeDto} from 'src/app/shared/model/demande/Demande.model';
import {DemandeCriteria} from 'src/app/shared/criteria/demande/DemandeCriteria.model';
import {SocieteDto} from 'src/app/shared/model/commun/Societe.model';
import {SocieteAdminService} from 'src/app/shared/service/admin/commun/SocieteAdmin.service';
import {EtatDemandeDto} from 'src/app/shared/model/demande/EtatDemande.model';
import {EtatDemandeAdminService} from 'src/app/shared/service/admin/demande/EtatDemandeAdmin.service';
import {TypeDemandeDto} from 'src/app/shared/model/demande/TypeDemande.model';
import {TypeDemandeAdminService} from 'src/app/shared/service/admin/demande/TypeDemandeAdmin.service';
import {ComptableDto} from 'src/app/shared/model/commun/Comptable.model';
import {ComptableAdminService} from 'src/app/shared/service/admin/commun/ComptableAdmin.service';
@Component({
  selector: 'app-demande-create-admin',
  templateUrl: './demande-create-admin.component.html'
})
export class DemandeCreateAdminComponent extends AbstractCreateController<DemandeDto, DemandeCriteria, DemandeAdminService>  implements OnInit {



   private _validDemandeCode = true;
   private _validDemandeLibelle = true;
    private _validSocieteIce = true;
    private _validSocieteRc = true;
    private _validTypeDemandeCode = true;
    private _validTypeDemandeLibelle = true;
    private _validEtatDemandeCode = true;
    private _validEtatDemandeLibelle = true;
    private _validComptableValidateurCin = true;
    private _validComptableTraitantCin = true;

    constructor( private demandeService: DemandeAdminService , private societeService: SocieteAdminService, private etatDemandeService: EtatDemandeAdminService, private typeDemandeService: TypeDemandeAdminService, private comptableService: ComptableAdminService) {
        super(demandeService);
    }

    ngOnInit(): void {
        this.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);
        this.typeDemande = new TypeDemandeDto();
        this.typeDemandeService.findAll().subscribe((data) => this.typeDemandes = data);
        this.etatDemande = new EtatDemandeDto();
        this.etatDemandeService.findAll().subscribe((data) => this.etatDemandes = data);
        this.comptableValidateur = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptableValidateurs = data);
        this.comptableTraitant = new ComptableDto();
        this.comptableService.findAll().subscribe((data) => this.comptableTraitants = data);
    }





    public override setValidation(value: boolean){
        this.validDemandeCode = value;
        this.validDemandeLibelle = value;
    }



    public override validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateDemandeCode();
        this.validateDemandeLibelle();
    }

    public validateDemandeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validDemandeCode = false;
        } else {
            this.validDemandeCode = true;
        }
    }
    public validateDemandeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validDemandeLibelle = false;
        } else {
            this.validDemandeLibelle = true;
        }
    }


    public async openCreateTypeDemande(typeDemande: string) {
    const isPermistted = await this.roleService.isPermitted('TypeDemande', 'add');
    if(isPermistted) {
         this.typeDemande = new TypeDemandeDto();
         this.createTypeDemandeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateEtatDemande(etatDemande: string) {
    const isPermistted = await this.roleService.isPermitted('EtatDemande', 'add');
    if(isPermistted) {
         this.etatDemande = new EtatDemandeDto();
         this.createEtatDemandeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get typeDemande(): TypeDemandeDto {
        return this.typeDemandeService.item;
    }
    set typeDemande(value: TypeDemandeDto) {
        this.typeDemandeService.item = value;
    }
    get typeDemandes(): Array<TypeDemandeDto> {
        return this.typeDemandeService.items;
    }
    set typeDemandes(value: Array<TypeDemandeDto>) {
        this.typeDemandeService.items = value;
    }
    get createTypeDemandeDialog(): boolean {
       return this.typeDemandeService.createDialog;
    }
    set createTypeDemandeDialog(value: boolean) {
        this.typeDemandeService.createDialog= value;
    }
    get societe(): SocieteDto {
        return this.societeService.item;
    }
    set societe(value: SocieteDto) {
        this.societeService.item = value;
    }
    get societes(): Array<SocieteDto> {
        return this.societeService.items;
    }
    set societes(value: Array<SocieteDto>) {
        this.societeService.items = value;
    }
    get createSocieteDialog(): boolean {
       return this.societeService.createDialog;
    }
    set createSocieteDialog(value: boolean) {
        this.societeService.createDialog= value;
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
    get etatDemande(): EtatDemandeDto {
        return this.etatDemandeService.item;
    }
    set etatDemande(value: EtatDemandeDto) {
        this.etatDemandeService.item = value;
    }
    get etatDemandes(): Array<EtatDemandeDto> {
        return this.etatDemandeService.items;
    }
    set etatDemandes(value: Array<EtatDemandeDto>) {
        this.etatDemandeService.items = value;
    }
    get createEtatDemandeDialog(): boolean {
       return this.etatDemandeService.createDialog;
    }
    set createEtatDemandeDialog(value: boolean) {
        this.etatDemandeService.createDialog= value;
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
    get validEtatDemandeCode(): boolean {
        return this._validEtatDemandeCode;
    }
    set validEtatDemandeCode(value: boolean) {
        this._validEtatDemandeCode = value;
    }
    get validEtatDemandeLibelle(): boolean {
        return this._validEtatDemandeLibelle;
    }
    set validEtatDemandeLibelle(value: boolean) {
        this._validEtatDemandeLibelle = value;
    }
    get validComptableValidateurCin(): boolean {
        return this._validComptableValidateurCin;
    }
    set validComptableValidateurCin(value: boolean) {
        this._validComptableValidateurCin = value;
    }
    get validComptableTraitantCin(): boolean {
        return this._validComptableTraitantCin;
    }
    set validComptableTraitantCin(value: boolean) {
        this._validComptableTraitantCin = value;
    }


}
