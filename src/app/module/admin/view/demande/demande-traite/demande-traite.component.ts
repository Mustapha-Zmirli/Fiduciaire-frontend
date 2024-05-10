import {Component, OnInit} from '@angular/core';
import {DemandeTraiteService} from "../../../../../shared/service/admin/demande/demande-traite.service";
import {DemandeDto} from "../../../../../shared/model/demande/Demande.model";

@Component({
  selector: 'app-demande-traite',
  templateUrl: './demande-traite.component.html',
  styleUrls: ['./demande-traite.component.scss']
})
export class DemandeTraiteComponent implements OnInit{

    constructor( private demandeTraiteService :DemandeTraiteService) {}

    ngOnInit() {
        this.getDemandeTraite();
    }

    public getDemandeTraite():void{
        this.demandeTraiteService.getDemandeTraite().subscribe(data => this.demandes=data)
    }

    public validerDemande(demande: DemandeDto) {
        this.demandeTraiteService.validerDemande(demande.code).subscribe(data => {
            if (data > 0) {
                console.log("La demande a été validée avec succès.");
                this.demandes = this.demandes.filter(d => d !== demande);
            } else {
                console.log("La demande n'a pas pu être validée.");
            }
        });
    }

    get demande(): DemandeDto {
        return this.demandeTraiteService.demande;
    }

    set demande(value: DemandeDto) {
        this.demandeTraiteService.demande = value;
    }

    get demandes(): Array<DemandeDto> {
        return this.demandeTraiteService.demandes;
    }

    set demandes(value: Array<DemandeDto>) {
        this.demandeTraiteService.demandes = value;
    }

}
