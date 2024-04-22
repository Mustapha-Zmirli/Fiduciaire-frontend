import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DemandeCriteria} from '../demande/DemandeCriteria.model';
import {TypePaiementCriteria} from './TypePaiementCriteria.model';
import {ComptableCriteria} from '../commun/ComptableCriteria.model';

export class PaiementComptableValidateurCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
     public montant: number;
     public montantMin: number;
     public montantMax: number;
    public datePaiement: Date;
    public datePaiementFrom: Date;
    public datePaiementTo: Date;
  public comptableValidateur: ComptableCriteria ;
  public comptableValidateurs: Array<ComptableCriteria> ;
  public typePaiement: TypePaiementCriteria ;
  public typePaiements: Array<TypePaiementCriteria> ;

}
