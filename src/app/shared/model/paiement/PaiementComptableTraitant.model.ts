import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DemandeDto} from '../demande/Demande.model';
import {TypePaiementDto} from './TypePaiement.model';
import {ComptableDto} from '../commun/Comptable.model';

export class PaiementComptableTraitantDto extends BaseDto{

    public code: string;

    public montant: null | number;

   public datePaiement: Date;

    public demande: DemandeDto ;
    public comptableTraitant: ComptableDto ;
    public typePaiement: TypePaiementDto ;
    

    constructor() {
        super();

        this.code = '';
        this.montant = null;
        this.datePaiement = null;
        this.comptableTraitant = new ComptableDto() ;
        this.typePaiement = new TypePaiementDto() ;

        }

}
