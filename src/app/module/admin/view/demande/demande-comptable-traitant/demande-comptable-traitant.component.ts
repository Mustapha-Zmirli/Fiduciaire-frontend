import {Component, OnInit} from '@angular/core';
import {DemandeDto} from "../../../../../shared/model/demande/Demande.model";
import {ComptableDto} from "../../../../../shared/model/commun/Comptable.model";
import {DemandeAdminService} from "../../../../../shared/service/admin/demande/DemandeAdmin.service";
import {EtatDemandeAdminService} from "../../../../../shared/service/admin/demande/EtatDemandeAdmin.service";
import { DemandeComptableTraitantService} from "../../../../../shared/service/admin/demande/demande-comptable-traitant.service";
import {AbstractListController} from "../../../../../zynerator/controller/AbstractListController";
import {ComptableCriteria} from "../../../../../shared/criteria/commun/ComptableCriteria.model";
import {ComptableAdminService} from "../../../../../shared/service/admin/commun/ComptableAdmin.service";

@Component({
  selector: 'app-demande-comptable-traitant',
  templateUrl: './demande-comptable-traitant.component.html',
  styleUrls: ['./demande-comptable-traitant.component.scss'],
})
export class DemandeComptableTraitantComponent implements OnInit{
    //demandes: DemandeDto[]=[];
    demandesAssociees: DemandeDto[] = [];//hada li5so yt afficha
    comptableTraitant: ComptableDto = new ComptableDto();
    demandesAcceptees: DemandeDto[]=[];
    demandesValidateur: DemandeDto[]=[];
    demandesRefuser: DemandeDto[]=[];


    public getDemandeEnAttente():void{
        this.demandeComptableTraitantService.getDemandeEnAttente().subscribe(data =>
            this.demandesAssociees=data)
    }
    public getDemandeRefusee():void{
        this.demandeComptableTraitantService.getDemandeRefusee().subscribe(data =>
            this.demandesRefuser=data)
    }
    public getListDemandesAcceptees():void{
        this.demandeComptableTraitantService.getListDemandesAcceptees().subscribe(data =>
            this.demandesAcceptees=data)
    }
    public getDemandesAcceptees(code: string) {
        this.demandeComptableTraitantService.getDemandesAcceptees(code).subscribe(data => {
            if (data > 0) {
                console.log("La demande a été traitée avec succès avec le code ${code} :`, res");
                this.demandesAcceptees.push(this.demandesAssociees.find(d => d.code === code));
                this.demandesAssociees = this.demandesAssociees.filter(d => d.code !== code);
            } else {
                console.log("La demande n'a pas pu être traitée.");
            }
        });
    }
    getDemandeRefuse(code: string ) {
        this.demandeComptableTraitantService.getDemandesRefuses(code).subscribe(data => {
            if (data > 0) {
                console.log("La demande a été refusée avec le code ${code} :`, data");
                this.demandesRefuser.push(this.demandesAssociees.find(d => d.code === code));
                this.demandesAssociees = this.demandesAssociees.filter(d => d.code !== code);
            } else {
                console.log("La demande n'a pas refusée.");
            }
        });

    }

   /* getDemandesAssociees() {
        this.demandesAssociees = this.demandes.filter(demande =>
            demande.etatDemande.libelle==='comptable traitant en attend' ||
            demande.comptableTraitant?.cin === this.comptableTraitant.cin
        );
    }*/
     constructor(private demandeComptableTraitantService:DemandeComptableTraitantService,private demandeService: DemandeAdminService , private etatDemandeService:EtatDemandeAdminService) {
    }
    ngOnInit(): void {

        this.getDemandeEnAttente();
        this.getListDemandesAcceptees();
        this.getDemandeRefusee();
    }


    finaliserDemande(code: string) {
      this.demandeComptableTraitantService.getDemandesFinalisees(code).subscribe(res=>{
            console.log(res);
          console.log(`Demande traitée avec le code ${code} :`, res);
          const demandeFinalisee = this.demandesAcceptees.find(demande => demande.code === code);
            if (demandeFinalisee) {
                this.demandesAcceptees = this.demandesAcceptees.filter(demande => demande.code !== code);
                this.demandesValidateur.push(demandeFinalisee);
            }
        },error => console.log(error)

     )

    }
    get demande(): DemandeDto {
        return this.demandeComptableTraitantService.demande;
    }

    set demande(value: DemandeDto) {
        this.demandeComptableTraitantService.demande = value;
    }

    get demandes(): Array<DemandeDto> {
        return this.demandeComptableTraitantService.demandes;
    }

    set demandes(value: Array<DemandeDto>) {
        this.demandeComptableTraitantService.demandes = value;
    }
}
