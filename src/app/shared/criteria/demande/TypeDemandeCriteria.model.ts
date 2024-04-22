import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class TypeDemandeCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public honnoraireComptableTraitant: number;
     public honnoraireComptableTraitantMin: number;
     public honnoraireComptableTraitantMax: number;
     public honnoraireComptableValidateur: number;
     public honnoraireComptableValidateurMin: number;
     public honnoraireComptableValidateurMax: number;

}
