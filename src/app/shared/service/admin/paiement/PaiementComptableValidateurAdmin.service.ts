import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';

import {PaiementComptableValidateurDto} from 'src/app/shared/model/paiement/PaiementComptableValidateur.model';
import {PaiementComptableValidateurCriteria} from 'src/app/shared/criteria/paiement/PaiementComptableValidateurCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PaiementComptableValidateurAdminService extends AbstractService<PaiementComptableValidateurDto, PaiementComptableValidateurCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PaiementComptableValidateurDto {
        return new PaiementComptableValidateurDto();
    }

    public constrcutCriteria(): PaiementComptableValidateurCriteria {
        return new PaiementComptableValidateurCriteria();
    }

    get API() {
        return environment.apiUrlUnivservice + 'admin/paiementComptableValidateur/';
    }


    payer(demandeCode: string, comptableValidateurCin: string): Observable<string> {
        const url = `${this.API}demande/${demandeCode}/cin/${comptableValidateurCin}`;
        return this.http.post<string>(url, {}).pipe(
            catchError(this.handleError)
        );
    }
    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'error inconnue!';
        if (error.error instanceof ErrorEvent) {

            errorMessage = `Error: ${error.error.message}`;
        } else {

            if (error.error && error.error.message) {
                errorMessage = `Message: ${error.error.message}`;
            } else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
        }
        return throwError(errorMessage);
    }
}
