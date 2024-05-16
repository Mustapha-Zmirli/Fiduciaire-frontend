import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeDto} from "../../../model/demande/Demande.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandeComptableTraitantService {

    private baseUrl = 'http://localhost:8036/api/admin/demande/';
    //private demandes!: Array<DemandeDto>;
    private _demande :DemandeDto;
    private _demandes :Array<DemandeDto>;
    constructor( private http : HttpClient) { }

    public getDemandeEnAttente():Observable<DemandeDto[]>{
        return  this.http.get<DemandeDto[]>(`${this.baseUrl}demandeEnAttente`);
    }
    public getDemandeRefusee():Observable<DemandeDto[]>{
        return  this.http.get<DemandeDto[]>(`${this.baseUrl}demandesRefusees`);
    }
    public getListDemandesAcceptees():Observable<DemandeDto[]>{
        return  this.http.get<DemandeDto[]>(`${this.baseUrl}demandesAcceptees`);
    }
    public getDemandesAcceptees(code: string): Observable<number> {
        return this.http.put<number>(`${this.baseUrl}accepterDemande/code/${code}`, {});
    }
    public getDemandesRefuses(code: string): Observable<number> {
        return this.http.put<number>(`${this.baseUrl}refuserDemande/code/${code}`, {});
    }
    public getDemandesFinalisees(code: string): Observable<number> {
        return this.http.put<number>(`${this.baseUrl}finaliserDemande/code/${code}`, {});
    }

    get demande(): DemandeDto {
        return this._demande;
    }

    set demande(value: DemandeDto) {
        this._demande = value;
    }

    get demandes(): Array<DemandeDto> {
        return this._demandes;
    }

    set demandes(value: Array<DemandeDto>) {
        this._demandes = value;
    }
}
