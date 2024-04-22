import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeDto} from '../demande/Demande.model';
import {TypePaiementDto} from './TypePaiement.model';
import {ComptableDto} from '../commun/Comptable.model';

export class PaiementComptableValidateurDto extends BaseDto{

    public code: string;

    public montant: null | number;

   public datePaiement: Date;

    public demande: DemandeDto ;
    public comptableValidateur: ComptableDto ;
    public typePaiement: TypePaiementDto ;
    

    constructor() {
        super();

        this.code = '';
        this.montant = null;
        this.datePaiement = null;
        this.comptableValidateur = new ComptableDto() ;
        this.typePaiement = new TypePaiementDto() ;

        }

}
