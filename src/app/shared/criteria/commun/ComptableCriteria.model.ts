import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class ComptableCriteria  extends BaseCriteria  {

    public id: number;
    public cin: string;
    public cinLike: string;
    public prenom: string;
    public prenomLike: string;
    public nom: string;
    public nomLike: string;
    public email: string;
    public emailLike: string;
    public categorieComptable: string;
    public categorieComptableLike: string;

}
