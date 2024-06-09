import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandeValideService } from '../../../../../shared/service/admin/demande/demande-valide.service';
import { DemandeDto } from '../../../../../shared/model/demande/Demande.model';
import { PaiementComptableTraitantAdminService } from "../../../../../shared/service/admin/paiement/PaiementComptableTraitantAdmin.service";
import { PaiementComptableValidateurAdminService } from "../../../../../shared/service/admin/paiement/PaiementComptableValidateurAdmin.service";

@Component({
    selector: 'app-demande-valide',
    templateUrl: './demande-valide.component.html',
    styleUrls: ['./demande-valide.component.scss']
})
export class DemandeValideComponent implements OnInit {

    constructor(
        private demandeValideService: DemandeValideService,
        private paiementService: PaiementComptableTraitantAdminService,
        private paiementValidateurService: PaiementComptableValidateurAdminService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.getDemandeValide();
    }

    public getDemandeValide(): void {
        this.demandeValideService.getDemandeValide().subscribe(data => this.demandes = data);
    }

    public payer(demande: DemandeDto): void {
        const demandeCode = demande.code;
        const comptableTraitantCin = demande.comptableTraitant.cin;

        this.paiementService.payer(demandeCode, comptableTraitantCin).subscribe(
            () => {
                this.snackBar.open('Paiement avec succès', 'Fermer', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: ['green-snackbar']
                });
            },
            (error) => {
                this.snackBar.open(error, 'Fermer', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
            }
        );
    }

    public payerValidateur(demande: DemandeDto): void {
        const demandeCode = demande.code;
        const comptableValidateurCin = demande.comptableValidateur.cin;


        this.paiementValidateurService.payer(demandeCode, comptableValidateurCin).subscribe(
            () => {
                this.snackBar.open('Paiement avec succès', 'Fermer', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: ['green-snackbar']
                });
            },
            (error) => {
                this.snackBar.open(error, 'Fermer', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
            }
        );
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
