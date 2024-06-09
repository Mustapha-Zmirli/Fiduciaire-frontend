import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

import {PaiementComptableTraitantDto} from 'src/app/shared/model/paiement/PaiementComptableTraitant.model';
import {PaiementComptableTraitantCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableTraitantCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementComptableTraitantAdminService extends AbstractService<PaiementComptableTraitantDto, PaiementComptableTraitantCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementComptableTraitantDto {
        return new PaiementComptableTraitantDto();
    }

    public constrcutCriteria(): PaiementComptableTraitantCriteria {
        return new PaiementComptableTraitantCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/paiementComptableTraitant/';
    }


    payer(demandeCode: string, comptableTraitantCin: string): Observable<string> {
        const url = `${this.API}demande/${demandeCode}/cin/${comptableTraitantCin}`;
        return this.http.post<string>(url, {}).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'error inconue!';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            if (error.error && error.error.message) {
                errorMessage = `Message: ${error.error.message}`;
            } else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
        }
        return throwError(errorMessage);
    }
}
