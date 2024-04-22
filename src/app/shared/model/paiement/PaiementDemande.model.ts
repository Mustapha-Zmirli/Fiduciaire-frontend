import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeDto} from '../demande/Demande.model';
import {TypePaiementDto} from './TypePaiement.model';

export class PaiementDemandeDto extends BaseDto{

    public code: string;

    public montant: null | number;

   public datePaiement: Date;

    public demande: DemandeDto ;
    public typePaiement: TypePaiementDto ;
    

    constructor() {
        super();

        this.code = '';
        this.montant = null;
        this.datePaiement = null;
        this.typePaiement = new TypePaiementDto() ;

        }

}
