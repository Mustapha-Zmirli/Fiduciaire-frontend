import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TypeDemandeDto extends BaseDto{

    public code: string;

    public libelle: string;

    public honnoraireComptableTraitant: null | number;

    public honnoraireComptableValidateur: null | number;

    

    constructor() {
        super();

        this.code = '';
        this.libelle = '';
        this.honnoraireComptableTraitant = null;
        this.honnoraireComptableValidateur = null;

        }

}
