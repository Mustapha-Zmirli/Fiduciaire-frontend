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
    public getListDemandesAcceptees():void{
        this.demandeComptableTraitantService.getListDemandesAcceptees().subscribe(data =>
            this.demandesAcceptees=data)
    }
    public getDemandesAcceptees(code: string) {
        this.demandeComptableTraitantService.getDemandesAcceptees(code).subscribe(data => {
            if (data > 0) {
                console.log("La demande a été traitée avec succès avec le code ${code} :`, res");
               // this.demandesAcceptees = this.demandesAssociees.filter(d => d !== demande);
                //this.demandesAcceptees.push(demande);
                //this.demandesAssociees = this.demandesAssociees.filter(d => d !== demande);
                // Ajoutez la demande à la liste des demandes acceptées
                //this.demandesAcceptees.push(this.demandesAssociees.find(d => d.code === code));
                // Supprimez la demande de la liste des demandes associées
                this.demandesAssociees = this.demandesAssociees.filter(d => d.code !== code);
            } else {
                console.log("La demande n'a pas pu être traitée.");
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
    }
    /*getDemandeAcceptee(code: string) {
         this.demandeComptableTraitantService.getDemandesAcceptees(code).subscribe(res=>{
            console.log(res);


         }
            const demandeAcceptee = this.demandes.find(demande => demande.code === code);
            if (demandeAcceptee) {
                this.demandesAcceptees=res;
                demandeAcceptee.etatDemande.libelle='comptable traitant accepté';
                this.demandesAcceptees.push(demandeAcceptee);
                this.demandesAssociees = this.demandesAssociees.filter(demande => demande.code !== code);//la demande acceptée est retirée de la liste demandes
            }
        },error => console.log(error)
        )
    }*/
getDemandeRefuse(code: string ) {
    this.demandeComptableTraitantService.getDemandesRefuses(code).subscribe(
        res => {
            console.log(`Demande refusée avec le code ${code} :`, res);
            const demandeRefuse = this.demandes.find(demande => demande.code === code);
            if (demandeRefuse) {
                //demandeRefuse.etatDemande.libelle = 'RefuserParComptableTraitant';
                this.demandesRefuser.push(demandeRefuse);
                this.demandes = this.demandes.filter(demande => demande.code !== code);
            }
        },
        error => console.log(`Erreur lors de la récupération de la demande refusée avec le code ${code} :`, error)
);
}

    finaliserDemande(code: string) {
      this.demandeComptableTraitantService.getDemandesFinalisees(code).subscribe(res=>{
            console.log(res);
          console.log(`Demande traitée avec le code ${code} :`, res);
          const demandeFinalisee = this.demandesAcceptees.find(demande => demande.code === code);
            if (demandeFinalisee) {
                //demandeFinalisee.etatDemande.libelle='traité';
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
