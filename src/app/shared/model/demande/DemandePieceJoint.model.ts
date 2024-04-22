import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeDto} from './Demande.model';

export class DemandePieceJointDto extends BaseDto{

    public code: string;

    public libelle: string;

    public path: string;

    public demande: DemandeDto ;
    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.path = '';

        }

}
