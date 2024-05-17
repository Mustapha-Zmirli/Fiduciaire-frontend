import {Component, OnInit} from '@angular/core';
import {DemandeValideService} from "../../../../../shared/service/admin/demande/demande-valide.service";
import {DemandeDto} from "../../../../../shared/model/demande/Demande.model";

@Component({
  selector: 'app-demande-valide',
  templateUrl: './demande-valide.component.html',
  styleUrls: ['./demande-valide.component.scss']
})
export class DemandeValideComponent implements OnInit{

    constructor( private demandeValideService :DemandeValideService) {}

    ngOnInit() {
        this.getDemandeValide();
    }

    public getDemandeValide():void{
        this.demandeValideService.getDemandeValide().subscribe(data => this.demandes=data)
    }



    get demande(): DemandeDto {
        return this.demandeValideService.demande;
    }

    set demande(value: DemandeDto) {
        this.demandeValideService.demande = value;
    }

    get demandes(): Array<DemandeDto> {
        return this.demandeValideService.demandes;
    }

    set demandes(value: Array<DemandeDto>) {
        this.demandeValideService.demandes = value;
    }

}
