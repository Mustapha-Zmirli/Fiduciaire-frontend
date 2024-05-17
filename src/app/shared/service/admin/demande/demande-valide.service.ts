import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeDto} from "../../../model/demande/Demande.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandeValideService {
    private baseUrl ='http://localhost:8036/api/admin/demande/';
    private _demande :DemandeDto;
    private _demandes :Array<DemandeDto>;

  constructor( private httpClient : HttpClient) { }



    public getDemandeValide():Observable<DemandeDto[]>{
        return  this.httpClient.get<DemandeDto[]>(`${this.baseUrl}demandeValide`);
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
