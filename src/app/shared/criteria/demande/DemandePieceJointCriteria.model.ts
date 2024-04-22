import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DemandeCriteria} from './DemandeCriteria.model';

export class DemandePieceJointCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
    public path: string;
    public pathLike: string;

}
