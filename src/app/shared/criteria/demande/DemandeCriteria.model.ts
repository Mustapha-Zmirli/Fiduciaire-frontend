import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SocieteCriteria} from '../commun/SocieteCriteria.model';
import {EtatDemandeCriteria} from './EtatDemandeCriteria.model';
import {TypeDemandeCriteria} from './TypeDemandeCriteria.model';
import {ComptableCriteria} from '../commun/ComptableCriteria.model';

export class DemandeCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public dateDemande: Date;
    public dateDemandeFrom: Date;
    public dateDemandeTo: Date;
    public dateExigibilite: Date;
    public dateExigibiliteFrom: Date;
    public dateExigibiliteTo: Date;
    public dateValidation: Date;
    public dateValidationFrom: Date;
    public dateValidationTo: Date;
    public dateTraitement: Date;
    public dateTraitementFrom: Date;
    public dateTraitementTo: Date;
  public societe: SocieteCriteria ;
  public societes: Array<SocieteCriteria> ;
  public typeDemande: TypeDemandeCriteria ;
  public typeDemandes: Array<TypeDemandeCriteria> ;
  public etatDemande: EtatDemandeCriteria ;
  public etatDemandes: Array<EtatDemandeCriteria> ;
  public comptableValidateur: ComptableCriteria ;
  public comptableValidateurs: Array<ComptableCriteria> ;
  public comptableTraitant: ComptableCriteria ;
  public comptableTraitants: Array<ComptableCriteria> ;

}
