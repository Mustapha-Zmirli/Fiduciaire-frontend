import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DemandeCriteria} from '../demande/DemandeCriteria.model';
import {TypePaiementCriteria} from './TypePaiementCriteria.model';
import {ComptableCriteria} from '../commun/ComptableCriteria.model';

export class PaiementComptableTraitantCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
    public datePaiement: Date;
    public datePaiementFrom: Date;
    public datePaiementTo: Date;
  public comptableTraitant: ComptableCriteria ;
  public comptableTraitants: Array<ComptableCriteria> ;
  public typePaiement: TypePaiementCriteria ;
  public typePaiements: Array<TypePaiementCriteria> ;

}
