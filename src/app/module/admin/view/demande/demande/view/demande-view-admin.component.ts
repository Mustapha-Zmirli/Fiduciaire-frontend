import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-demande-view-admin',
  templateUrl: './demande-view-admin.component.html'
})
export class DemandeViewAdminComponent extends AbstractViewController<DemandeDto, DemandeCriteria, DemandeAdminService> implements OnInit {


    constructor(private demandeService: DemandeAdminService, private societeService: SocieteAdminService, private etatDemandeService: EtatDemandeAdminService, private typeDemandeService: TypeDemandeAdminService, private comptableService: ComptableAdminService){
        super(demandeService);
    }

    ngOnInit(): void {
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


}
